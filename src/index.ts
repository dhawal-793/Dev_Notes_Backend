import express from 'express'
import type { Application, NextFunction, Request, Response } from 'express'

const app: Application = express()
const PORT: string | number = 5000

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'Hello World' })
})

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`)
})
