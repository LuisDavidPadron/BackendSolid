import { NextFunction, Request, Response } from 'express'
import { unauthorized } from '../../helpers/http-helper'

export const checkApi = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const apiKey: any = req.headers.api

    if (apiKey === process.env.APIKEY) {
      next()
    } else {
      next(res.status(401).send(unauthorized(new Error('Unauthorized'))))
    }
  }
}
