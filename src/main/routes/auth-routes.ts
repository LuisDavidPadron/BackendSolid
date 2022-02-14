import { Router } from 'express'
import * as passport from 'passport'
import { AdapterRouteAuth, AdapterRoutes } from '../adapters/express-adapter'
import { makeSignInUserController } from '../factories/users'

export default (router: Router): void => {
  router.post('/auth/sign-in', AdapterRoutes(makeSignInUserController()))
  router.post('/auth/login', passport.authenticate('local', { session: false }), AdapterRouteAuth())
}
