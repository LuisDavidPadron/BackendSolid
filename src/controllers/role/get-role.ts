import { Role } from '../../domain/useCases/role'
import { serverError, success } from '../../helpers/http-helper'
import { Controller } from '../../interfaces/controller'
import { HttpResponse } from '../../interfaces/http-interface'

export class GetRoles implements Controller {
  constructor (private readonly role: Role) {
    this.role = role
  }

  async handle (): Promise<HttpResponse> {
    try {
      const users = await this.role.get()
      return success(users)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
