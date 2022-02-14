import { Request, Response } from 'express'
import { Controller } from '../../interfaces/controller'
import { HttpRequest, HttpResponse } from '../../interfaces/http-interface'

export const AdapterRoutes = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      user: req.user,
      logo: req.file
    }

    const httpResponse: HttpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}

export const AdapterRouteAuth = () => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      user: req.user
    }

    res.status(200).json(httpRequest.user)
  }
}
