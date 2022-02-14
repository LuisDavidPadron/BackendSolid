import { RegisterRole } from '../../controllers/role/register-role'
import { DbRole } from '../../data/useCases/db-role'
import { GetRoles } from '../../controllers/role/get-role'
import { UpdateRole } from '../../controllers/role/update-role'

export const makeRegisterRoleController = (): RegisterRole => {
  const dbRole = new DbRole()
  const registerRole = new RegisterRole(dbRole)

  return registerRole
}

export const getRoleController = (): GetRoles => {
  const dbRole = new DbRole()
  const roles = new GetRoles(dbRole)

  return roles
}

export const updateRoleController = (): UpdateRole => {
  const dbRole = new DbRole()
  const role = new UpdateRole(dbRole)

  return role
}
