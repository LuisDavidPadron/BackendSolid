import { MissingFormalParameter } from '../errors/client-error'
import { ServerError } from '../errors/server-error'
import { HttpResponse } from '../interfaces/http-interface'

export const serverError = (error: Error): HttpResponse => ({ statusCode: 500, body: new ServerError(error.message).message })
export const unauthorized = (error: Error): HttpResponse => ({ statusCode: 401, body: new ServerError(error.message).message })
export const errorParameter = (parameter: string): HttpResponse => ({ statusCode: 400, body: new MissingFormalParameter(parameter) })
export const errorBadRequest = (error: Error): HttpResponse => ({ statusCode: 400, body: new ServerError(error.message).message })
export const success = (data: any): HttpResponse => ({ statusCode: 200, body: data })

export const messagesError = [
  'User not found',
  'Unauthorized'
]
