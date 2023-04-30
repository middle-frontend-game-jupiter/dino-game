import type { Express, NextFunction, Request, Response } from "express";

import * as path from 'path'
import * as fs from 'fs';
import { createServer as createViteServer } from 'vite'
import type { ViteDevServer } from 'vite'

const isDev = () => process.env.NODE_ENV === 'development'

export async function ssr(app: Express) {
  let vite: ViteDevServer | undefined

  const distPath = path.dirname(require.resolve('client/dist/index.html'))
  const srcPath = path.dirname(require.resolve('client'))
  const ssrClientPath = require.resolve('client/ssr-dist/ssr.cjs')


  if(isDev()) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom',
    })
    
    app.use(vite.middlewares);
  } 

  return async (req: Request, res: Response, next: NextFunction) => {  
    let template: string;
    const url = req.originalUrl

    try {
      if(isDev()) {
        template = await fs.readFileSync(path.resolve(srcPath, 'index.html'), 'utf-8')

        template = await vite!.transformIndexHtml(url, template)
      } else {
        template = fs.readFileSync(
          path.resolve(distPath, 'index.html'),
          'utf-8'
        )
      }

      let mod;

      if (isDev()) {
          mod = (await vite!.ssrLoadModule(
            path.resolve(srcPath, 'src/ssr.tsx')
          ))
        } else {
          mod = await import(ssrClientPath)
      }


      const { render } = mod;

      const [serverApp] = await render(url);

      const html = () => template.replace(`<!--ssr-outlet-->`, serverApp)

      res.status(200).set({'Content-Type': 'text/html' }).end(html())
    } catch(error) {
      console.log(error)
      vite?.ssrFixStacktrace(error as Error);

      next()
    }
  };
}