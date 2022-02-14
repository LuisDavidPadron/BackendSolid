import { Optional, Model, DataTypes } from 'sequelize'
import { sequelize } from '../../infraestructure/db/postgreSQL/pg-connect'
import { CategoryImage } from './categoryImagesModel'
import { Empresa } from './empresaModel'
import { Product } from './productModel'

export interface CategoryAttributes {
  id?: number
  name: string
  idEmpresa: number
}

export interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id'> {}

export class Category extends Model<CategoryAttributes, CategoryCreationAttributes> implements CategoryAttributes {
  declare id: number
  declare name: string
  declare idEmpresa: number
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idEmpresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Empresa,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    tableName: 'categories'
  }
)

Category.hasMany(Product, { as: 'Product', foreignKey: 'idCategory' })
Category.hasMany(CategoryImage, { as: 'CategoryImages', foreignKey: 'idCategory' })
