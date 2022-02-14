import { User } from '../../domain/useCases/user'
import { errorParameter, serverError, success } from '../../helpers/http-helper'
import { Controller } from '../../interfaces/controller'
import { HttpRequest, HttpResponse } from '../../interfaces/http-interface'

export class RegisterUser implements Controller {
  constructor (private readonly user: User) {
    this.user = user
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredProperties = ['name', 'mail', 'phoneNumber', 'password', 'role', 'idEmpresa']

      for (const props of requiredProperties) if (!httpRequest.body[props]) return errorParameter(`${props}`)

      const { name, mail, phoneNumber, password, roleId, idEmpresa } = httpRequest.body

      const user = await this.user.add({ name, mail, phoneNumber, password, roleId, idEmpresa })

      return success(user)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
