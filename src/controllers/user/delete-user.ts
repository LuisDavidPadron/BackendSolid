import { User } from '../../domain/useCases/user'
import { errorParameter, errorBadRequest, success } from '../../helpers/http-helper'
import { Controller } from '../../interfaces/controller'
import { HttpRequest, HttpResponse } from '../../interfaces/http-interface'

export class DeleteUser implements Controller {
  constructor (private readonly user: User) {
    this.user = user
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredProperties = ['id']

      for (const props of requiredProperties) if (!httpRequest.params[props]) return errorParameter(`${props}`)

      const { id } = httpRequest.params

      const user = await this.user.delete(id)

      return success(user)
    } catch (error: any) {
      return errorBadRequest(error ? Error('No exist reference') : error)
    }
  }
}
