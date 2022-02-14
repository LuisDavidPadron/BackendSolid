import { Identifier } from 'sequelize'
import { RoleCreationAttributes } from '../models/roleModel'

export interface Role {
  add: (destinatary: RoleCreationAttributes) => Promise<RoleCreationAttributes>
  update: (destinatary: RoleCreationAttributes, id: Identifier) => Promise<RoleCreationAttributes>
  get: () => Promise<RoleCreationAttributes[]>
  delete: (id: Identifier) => Promise<RoleCreationAttributes | null>
}
