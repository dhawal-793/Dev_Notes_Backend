import { Router } from 'express'
import type { Request, Response } from 'express'

export const UserRouter: Router = Router()

UserRouter.get('/', (req: Request, res: Response) => {
  res.send('Users Page')
})
