import { Identifier, QueryTypes } from 'sequelize'
import { RoleCreationAttributes, RoleAttributes, Role } from '../domain/models/roleModel'
import { sequelize } from '../infraestructure/db/postgreSQL/pg-connect'

export class RoleService {
  async create (role: RoleCreationAttributes): Promise<RoleCreationAttributes> { return await Role.create(role) }

  async update (roleAttr: RoleCreationAttributes, id: Identifier): Promise<RoleCreationAttributes | null> {
    const role: Role | null = await Role.findByPk(id)

    return role && await role.update(roleAttr)
  }

  async get (): Promise<RoleAttributes[]> {
    const roles: Role[] = await sequelize.query('SELECT name FROM roles', { type: QueryTypes.SELECT })
    return roles
  }

  async delete (id: Identifier): Promise<RoleCreationAttributes | null> {
    const user: Role | null = await Role.findByPk(id)
    if (user) await user.destroy()
    return user
  }
}

export default new RoleService()
