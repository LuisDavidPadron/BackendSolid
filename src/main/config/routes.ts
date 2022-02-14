import { Router, Express } from 'express'
import fg = require('fast-glob')

export default (app: Express): void => {
  const router = Router()

  app.get('/', (req, res) => res.json('Hello World'))
  app.use('/api/v1', router)
  fg.sync('**/src/main/routes/**routes.ts')
    .map(async file => (await import(`../../../${file}`)).default(router)) // Routes directly with fast glob
}
