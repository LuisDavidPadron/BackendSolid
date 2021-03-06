import request = require('supertest')
import app from '../config/app'

describe('Middlewares', () => {
  it('Should Body-Parse', async () => {
    app.post('/body-parser', (req, res) => {
      res.send(req.body)
    })

    await request(app)
      .post('/body-parser')
      .send({ name: 'luis' })
      .expect({ name: 'luis' })
  })
})
