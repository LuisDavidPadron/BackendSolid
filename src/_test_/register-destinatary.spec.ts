import { RegisterUser } from '../controllers/user/register-user'
import { FakeAddDestinatary } from '../data/useCases/fake-add-destinatary'
import { MissingFormalParameter } from '../errors/client-error'
import { HttpRequest, HttpResponse } from '../interfaces/http-interface'

describe('Register Destinatary', () => {
  test('is the name does not exist return 400', async () => {
    const fakeDestinatary = new FakeAddDestinatary()

    const sut = new RegisterUser(fakeDestinatary)

    const httpRequest: HttpRequest = {
      body: {
        mail: 'john@doe.com',
        phoneNumber: '912341234',
        password: '123456789'
      }
    }
    const httpResponse: Promise<HttpResponse> = sut.handle(httpRequest)

    expect((await httpResponse).statusCode).toBe(400)

    expect((await httpResponse).body).toEqual(new MissingFormalParameter('name'))
  })
})
