import { Router } from 'express'
import * as passport from 'passport'
import { AdapterRoutes } from '../adapters/express-adapter'
import { getRoleController, makeRegisterRoleController, updateRoleController } from '../factories/roles'
import { checkRoles } from '../middlewares'

export default (router: Router): void => {
  router.post('/role', passport.authenticate('jwt', { session: false }), checkRoles('Admin'), AdapterRoutes(makeRegisterRoleController()))
  router.get('/role', passport.authenticate('jwt', { session: false }), checkRoles('Admin'), AdapterRoutes(getRoleController()))
  router.put('/role/:id', passport.authenticate('jwt', { session: false }), checkRoles('Admin'), AdapterRoutes(updateRoleController()))
}
