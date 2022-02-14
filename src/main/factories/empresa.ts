import { DbUser } from '../../data/useCases/db-user'
import { SignUser } from '../../controllers/auth/sign-user'
import { DeleteUser } from '../../controllers/user/delete-user'

import { RegisterEmpresa } from '../../controllers/empresa/register-empresa'
import { DbEmpresa } from '../../data/useCases/db-empresa'
import { GetEmpresas } from '../../controllers/empresa/get-empresa'
import { UpdateEmpresa } from '../../controllers/empresa/update-empresa'

export const makeRegisterEmpresaController = (): RegisterEmpresa => {
  const dbEmpresa = new DbEmpresa()
  const registerEmpresa = new RegisterEmpresa(dbEmpresa)

  return registerEmpresa
}

export const getEmpresaController = (): GetEmpresas => {
  const dbEmpresa = new DbEmpresa()
  const empresas = new GetEmpresas(dbEmpresa)

  return empresas
}

export const updateEmpresaController = (): UpdateEmpresa => {
  const dbEmpresa = new DbEmpresa()
  const empresa = new UpdateEmpresa(dbEmpresa)

  return empresa
}

export const deleteUserController = (): DeleteUser => {
  const dbUser = new DbUser()
  const user = new DeleteUser(dbUser)

  return user
}

export const makeSignInUserController = (): SignUser => {
  const dbUser = new DbUser()
  const signUser = new SignUser(dbUser)

  return signUser
}
