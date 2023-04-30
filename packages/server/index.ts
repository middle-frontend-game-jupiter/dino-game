import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
dotenv.config()

import { ssr } from './middlewares/ssr';

import express from 'express'
// import { createClientAndConnect } from './db'



// // createClientAndConnect()

async function startServer() {
  const app = express()
  app.use(cors())
  const port = Number(process.env.SERVER_PORT) || 3001

  const render = await ssr(app)

  app.use(
    '*', 
    cookieParser(), 
    async (req, res, next) => await render(req, res, next)
  )

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  })
}

startServer()

