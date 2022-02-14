import { Role } from '../../domain/useCases/role'
import { errorParameter, serverError, success } from '../../helpers/http-helper'
import { Controller } from '../../interfaces/controller'
import { HttpRequest, HttpResponse } from '../../interfaces/http-interface'

export class RegisterRole implements Controller {
  constructor (private readonly role: Role) {
    this.role = role
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredProperties = ['name']

      for (const props of requiredProperties) if (!httpRequest.body[props]) return errorParameter(`${props}`)

      const { name } = httpRequest.body
      const role = await this.role.add({ name })

      return success(role)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
