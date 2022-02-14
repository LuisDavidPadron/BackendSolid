import { sign } from 'jsonwebtoken'
import { User } from '../../domain/useCases/user'
import { errorParameter, serverError, success } from '../../helpers/http-helper'
import { Controller } from '../../interfaces/controller'
import { HttpRequest, HttpResponse } from '../../interfaces/http-interface'

const { config } = require('../../main/config/config')

export class SignUser implements Controller {
  constructor (private readonly user: User) {
    this.user = user
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredProperties = ['name', 'mail', 'phoneNumber', 'password']

      for (const props of requiredProperties) if (!httpRequest.body[props]) return errorParameter(`${props}`)

      const { name, mail, phoneNumber, password } = httpRequest.body

      const user = await this.user.add({ name, mail, phoneNumber, password, roleId: 17 })

      const token = sign({ id: user.id, role: 'Client' }, config.secret, {
        expiresIn: '7d'
      })

      return success({ token })
    } catch (error: any) {
      return serverError(error)
    }
  }
}
