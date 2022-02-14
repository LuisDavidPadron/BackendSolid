import { Empresa } from '../../domain/useCases/empresa'
import { errorParameter, serverError, success } from '../../helpers/http-helper'
import { Controller } from '../../interfaces/controller'
import { HttpRequest, HttpResponse } from '../../interfaces/http-interface'

export class UpdateEmpresa implements Controller {
  constructor (private readonly empresa: Empresa) {
    this.empresa = empresa
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredProperties = ['name', 'mail', 'phoneNumber', 'identifierEmpresa']

      for (const props of requiredProperties) if (!httpRequest.body[props]) return errorParameter(`${props}`)

      const { name, mail, phoneNumber, identifierEmpresa } = httpRequest.body
      const logo = httpRequest.logo?.path
      const { id } = httpRequest.params
      const empresa = await this.empresa.update({ name, mail, phoneNumber, logo, identifierEmpresa }, id)

      return success(empresa)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
