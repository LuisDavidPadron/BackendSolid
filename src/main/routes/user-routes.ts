import { Router } from 'express'
import { AdapterRoutes } from '../adapters/express-adapter'
import { makeRegisterUserController, getUsersController, updateUserController, deleteUserController } from '../factories/users'
import { checkRoles } from '../middlewares'
import * as passport from 'passport'

export default (router: Router): void => {
  router.post('/user', passport.authenticate('jwt', { session: false }), checkRoles('Admin'), AdapterRoutes(makeRegisterUserController()))
  router.get('/users', passport.authenticate('jwt', { session: false }), checkRoles('Admin', 'Client'), AdapterRoutes(getUsersController()))
  router.put('/user/:id', passport.authenticate('jwt', { session: false }), checkRoles('Admin'), AdapterRoutes(updateUserController()))
  router.delete('/user/:id', passport.authenticate('jwt', { session: false }), checkRoles('Admin'), AdapterRoutes(deleteUserController()))
}
