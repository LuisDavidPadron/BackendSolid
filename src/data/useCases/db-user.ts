import { Identifier } from 'sequelize/dist'
import { UserCreationAttributes } from '../../domain/models/userModel'
import { User } from '../../domain/useCases/user'
import userService from '../../services/userService'

/*
 *Si se cambia la BD se sebe cambiar esta implementacion y donde se instancia
 */

export class DbUser implements User {
  async add (destinatary: UserCreationAttributes): Promise<UserCreationAttributes> {
    const dbUser = await userService.create(destinatary)

    return await new Promise(resolve => resolve(dbUser))
  }

  async update (destinatary: UserCreationAttributes, id: Identifier): Promise<any> {
    const dbUser = await userService.update(destinatary, id)

    return await dbUser ? await new Promise(resolve => resolve(dbUser)) : await Promise.reject(Error)
  }

  async get (): Promise<UserCreationAttributes[]> {
    const dbUser = await userService.get()

    return await new Promise(resolve => resolve(dbUser))
  }

  async delete (id: Identifier): Promise<UserCreationAttributes | null> {
    const dbUser = await userService.delete(id)

    return await dbUser ? await new Promise(resolve => resolve(dbUser)) : await Promise.reject(Error)
  }
}
