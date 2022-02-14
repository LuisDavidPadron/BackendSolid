import { Router } from 'express'
import { AdapterRoutes } from '../adapters/express-adapter'
import { checkRoles, upload } from '../middlewares'
import * as passport from 'passport'
import { makeRegisterEmpresaController, updateEmpresaController } from '../factories/empresa'

export default (router: Router): void => {
  router.post('/empresa', passport.authenticate('jwt', { session: false }),
    upload('/public/images/logos').single('logo'), checkRoles('Admin', 'Client'),
    AdapterRoutes(makeRegisterEmpresaController())
  )
  // router.get('/empresas', passport.authenticate('jwt', { session: false }), checkRoles('Admin', 'Client'), AdapterRoutes(getUsersController()))
  router.put('/empresa/:id', passport.authenticate('jwt', { session: false }),
    upload('/public/images/logos').single('logo'),
    checkRoles('Admin', 'Client'), AdapterRoutes(updateEmpresaController())
  )
  // router.delete('/empresa/:id', passport.authenticate('jwt', { session: false }), checkRoles('Admin', 'Client'), AdapterRoutes(deleteUserController()))
}
