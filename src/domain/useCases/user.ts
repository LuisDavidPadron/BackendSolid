import { Identifier } from 'sequelize'
import { UserCreationAttributes } from '../models/userModel'

export interface User {
  add: (user: UserCreationAttributes) => Promise<UserCreationAttributes>
  update: (user: UserCreationAttributes, id: Identifier) => Promise<UserCreationAttributes>
  get: () => Promise<UserCreationAttributes[]>
  delete: (id: Identifier) => Promise<UserCreationAttributes | null>
}
