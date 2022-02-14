import { Identifier } from 'sequelize/dist'
import { RoleCreationAttributes } from '../../domain/models/roleModel'
import { Role } from '../../domain/useCases/role'
import roleService from '../../services/roleService'

/*
 *Si se cambia la BD se sebe cambiar esta implementacion y donde se instancia
 */

export class DbRole implements Role {
  async add (role: RoleCreationAttributes): Promise<RoleCreationAttributes> {
    const dbRole = await roleService.create(role)

    return await new Promise(resolve => resolve(dbRole))
  }

  async update (destinatary: RoleCreationAttributes, id: Identifier): Promise<any> {
    const dbRole = await roleService.update(destinatary, id)

    return await dbRole ? await new Promise(resolve => resolve(dbRole)) : await Promise.reject(Error)
  }

  async get (): Promise<RoleCreationAttributes[]> {
    const dbRole = await roleService.get()

    return await new Promise(resolve => resolve(dbRole))
  }

  async delete (id: Identifier): Promise<RoleCreationAttributes | null> {
    const dbRole = await roleService.delete(id)

    return await new Promise(resolve => resolve(dbRole))
  }
}
