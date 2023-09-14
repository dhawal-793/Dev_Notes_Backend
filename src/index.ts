import express from 'express'
import type { Application, NextFunction, Request, Response } from 'express'

import './Utils/connectToDB'
import { routes } from './routes'

const app: Application = express()
const PORT: number = 5000

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'Hello World' })
})

routes(app)

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`)
})
