import { Router, Express } from 'express'
import fg = require('fast-glob')
import { serve, setup } from 'swagger-ui-express'

const swaggerDocument = require('../../../api/swagger/swagger.json')

export default (app: Express): void => {
  const router = Router()

  app.use('/api-docs', serve, setup(swaggerDocument))
  app.get('/', (req, res) => res.json('HELLO WORLD'))
  app.use('/api/v1', router)
  fg.sync('**/src/main/routes/**routes.ts')
    .map(async file => (await import(`../../../${file}`)).default(router)) // Routes directly with fast glob
}
