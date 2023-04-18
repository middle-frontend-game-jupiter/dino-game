import cors from 'cors'

import * as path from 'path'
import * as fs from 'fs';
import express from 'express'
import cookieParser from 'cookie-parser';

import { createServer as createViteServer } from 'vite'
import { createProxyMiddleware } from 'http-proxy-middleware'

import type { ViteDevServer } from 'vite';

import { checkUserMiddleware } from './middlewares/checkUserMiddleware'

const isDev = () => process.env.NODE_ENV === 'development'

export async function startServer() {
  const app = express()
  app.use(cors())

  let vite: ViteDevServer | undefined

  const distPath = path.dirname(require.resolve('client/dist/index.html'))
  const srcPath = path.dirname(require.resolve('client'))
  const ssrClientPath = require.resolve('client/ssr-dist/ssr.cjs')


  const port = Number(process.env.SERVER_PORT) || 3002

  if(isDev()) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom',
    })

    app.use(vite.middlewares);
  }

  interface SSRModule {
    render: (
      uri: string,
      repository?: any
    ) => Promise<[string]>
  }

  app.use(
    '/api/v2',
    createProxyMiddleware({
      changeOrigin: true,
      cookieDomainRewrite: {
        '*': '',
      },
      target: 'https://ya-praktikum.tech',
    })
  )


  if (!isDev()) {
    app.use('/assets', express.static(path.resolve(distPath, 'assets')))
  }


  app.use('*', cookieParser(), checkUserMiddleware, async (req, res, next) => {
    const url = req.originalUrl

    try {
      let template: string;
      
      if (!isDev()) {
        template = fs.readFileSync(
          path.resolve(distPath, 'index.html'),
          'utf-8'
        )
      } else {
        template = fs.readFileSync(path.resolve(srcPath, 'index.html'), 'utf-8')

        template = await vite!.transformIndexHtml(url, template)
      }

      let mod;

      if (isDev()) {
        mod = (await vite!.ssrLoadModule(
          path.resolve(srcPath, 'src/ssr.tsx')
        )) as SSRModule
      } else {
        mod = await import(ssrClientPath)
      }


      const { render } = mod;

      const { user } = res as any;

      const [app] = await render(url, {
        ...user,
      });

      const html = template
        .replace(`<!--ssr-outlet-->`, app)
        .replace('<!--store-data-->', JSON.stringify({ user }))

      
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch(error) {
      vite?.ssrFixStacktrace(error as Error);
      next();
    }
  })





  app.listen(port, () => console.log('[start-app]'))
}