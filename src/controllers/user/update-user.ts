import { Empresa } from '../../domain/useCases/empresa'
import { errorParameter, errorBadRequest, success } from '../../helpers/http-helper'
import { Controller } from '../../interfaces/controller'
import { HttpRequest, HttpResponse } from '../../interfaces/http-interface'

export class UpdateUser implements Controller {
  constructor (private readonly empresa: Empresa) {
    this.empresa = empresa
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredProperties = ['name', 'mail', 'phoneNumber', 'password']

      for (const props of requiredProperties) if (!httpRequest.body[props]) return errorParameter(`${props}`)

      const { id } = httpRequest.params
      const { name, mail, phoneNumber, identifierEmpresa } = httpRequest.body
      const logo = httpRequest.logo.path

      const empresa = await this.empresa.update({ name, mail, phoneNumber, logo, identifierEmpresa }, id)

      return success(empresa)
    } catch (error: any) {
      return errorBadRequest(error ? Error('No exist reference') : error)
    }
  }
}
