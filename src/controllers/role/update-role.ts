import { Role } from '../../domain/useCases/role'
import { errorParameter, errorBadRequest, success } from '../../helpers/http-helper'
import { Controller } from '../../interfaces/controller'
import { HttpRequest, HttpResponse } from '../../interfaces/http-interface'

export class UpdateRole implements Controller {
  constructor (private readonly role: Role) {
    this.role = role
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredProperties = ['name']

      for (const props of requiredProperties) if (!httpRequest.body[props]) return errorParameter(`${props}`)

      const { id } = httpRequest.params
      const { name } = httpRequest.body

      const role = await this.role.update({ name }, id)

      return success(role)
    } catch (error: any) {
      return errorBadRequest(error ? Error('No exist reference') : error)
    }
  }
}
