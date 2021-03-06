import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'

import './database/index.ts'
import { router } from './routes'

const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

app.listen(3333, () => console.log('API Iniciada v1.2.1 || Capy Soluções Digitais'))
