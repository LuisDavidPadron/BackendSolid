import { RegisterUser } from '../../controllers/user/register-user'
import { GetUsers } from '../../controllers/user/get-users'
import { UpdateUser } from '../../controllers/user/update-user'
import { DbUser } from '../../data/useCases/db-user'
import { SignUser } from '../../controllers/auth/sign-user'
import { DeleteUser } from '../../controllers/user/delete-user'

export const makeRegisterUserController = (): RegisterUser => {
  const dbUser = new DbUser()
  const registerUser = new RegisterUser(dbUser)

  return registerUser
}

export const getUsersController = (): GetUsers => {
  const dbUser = new DbUser()
  const users = new GetUsers(dbUser)

  return users
}

export const updateUserController = (): UpdateUser => {
  const dbUser = new DbUser()
  const user = new UpdateUser(dbUser)

  return user
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
