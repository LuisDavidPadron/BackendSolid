import { Empresa } from '../../domain/useCases/empresa'
import { serverError, success } from '../../helpers/http-helper'
import { Controller } from '../../interfaces/controller'
import { HttpResponse } from '../../interfaces/http-interface'

export class GetEmpresas implements Controller {
  constructor (private readonly empresa: Empresa) {
    this.empresa = empresa
  }

  async handle (): Promise<HttpResponse> {
    try {
      const empresas = await this.empresa.get()
      return success(empresas)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
