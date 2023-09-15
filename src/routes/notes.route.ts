import { Router } from 'express'
import type { Request, Response } from 'express'

export const NoteRouter: Router = Router()

NoteRouter.get('/', (req: Request, res: Response) => {
  res.send('Notes Page')
})
