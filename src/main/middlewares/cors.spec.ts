import request = require('supertest')
import app from '../config/app'

describe('Cors', () => {
  it('Should verify open Cors', async () => {
    app.get('/test-cors', (req, res) => {
      res.send()
    })

    await request(app)
      .get('/test-cors')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-headers', '*')
      .expect('access-control-allow-methods', '*')
  })
})
