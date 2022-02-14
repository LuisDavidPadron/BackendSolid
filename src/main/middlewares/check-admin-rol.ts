import { NextFunction, Request, Response } from 'express'
import { messagesError, unauthorized } from '../../helpers/http-helper'

export const checkRoles = (...roles: any[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user: any = req.user

    if (roles.includes(user.role)) {
      next()
    } else {
      next(res.status(401).send(unauthorized(new Error(messagesError[1]))))
    }
  }
}
