import { User } from '../../domain/useCases/user'
import { serverError, success } from '../../helpers/http-helper'
import { Controller } from '../../interfaces/controller'
import { HttpResponse } from '../../interfaces/http-interface'

export class GetUsers implements Controller {
  constructor (private readonly user: User) {
    this.user = user
  }

  async handle (): Promise<HttpResponse> {
    try {
      const users = await this.user.get()

      return success(users)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
