import express from 'express'
import cors from 'cors'
import type { Application, NextFunction, Request, Response } from 'express'

import './Utils/connectToDB'
import { routes } from './routes'

const app: Application = express()
const PORT: number = 5000

// cors access handler
app.use(cors())
app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'Hello World' })
})

routes(app)

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`)
})
