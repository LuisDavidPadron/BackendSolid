import { Identifier } from 'sequelize'
import { CategoryCreationAttributes } from '../models/categoryModel'

export interface Category {
  add: (user: CategoryCreationAttributes) => Promise<CategoryCreationAttributes>
  update: (user: CategoryCreationAttributes, id: Identifier) => Promise<CategoryCreationAttributes>
  get: () => Promise<CategoryCreationAttributes[]>
  delete: (id: Identifier) => Promise<CategoryCreationAttributes | null>
}
