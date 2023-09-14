import type { Application, Router } from 'express'
import { UserRouter } from './users'
import { NoteRouter } from './notes'

const _routes: Array<[string, Router]> = [
  ['/api/users', UserRouter],
  ['/api/notes', NoteRouter]
]

export const routes = (app: Application): void => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}
