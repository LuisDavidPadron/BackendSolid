import { InvalidArguments } from '../errors/invalid-arg'
import { UrlLogin } from '../protocols/protocols-http'

describe('Protocols Http in querys', () => {
  test('Url login', () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost:3000/login')

    expect(parseUrl.href).toEqual('http://localhost:3000/login')
    expect(parseUrl.port).toBe('3000')
  })

  test('Response Query', () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost:3000/login?mail=mail&password=password')
    const expectAuth = {
      mail: 'mail',
      password: 'password'
    }

    expect(parseUrl.query).toEqual(expectAuth)
  })

  test('Response Route destinatary', () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost:3000/destinatary')

    expect(parseUrl.pathname).toBe('/destinatary')
  })

  test('Response Query Route destinatary ', () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost:3000/destinatary?mail=mail&password=password&name=name&rut=rut&phoneNumber=phoneNumber')

    const expectDestinatary = {
      mail: 'mail',
      password: 'password',
      name: 'name',
      rut: 'rut',
      phoneNumber: 'phoneNumber'
    }

    expect(parseUrl.query).toEqual(expectDestinatary)
  })

  test('Invalid URL', () => {
    function expectedError (): void {
      UrlLogin.parseUrl('')
    }
    expect(expectedError).toThrowError(new InvalidArguments(''))
  })
})
