import { Optional, Model, DataTypes } from 'sequelize'
import { sequelize } from '../../infraestructure/db/postgreSQL/pg-connect'
import { Category } from './categoryModel'
import { ProductImage } from './productImagesModel'

export interface ProductAttributes {
  id?: number
  name: string
  price: number
  sku: string
  quantity: number
  idCategory: number
}

export interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {}

export class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  declare id: number
  declare name: string
  declare price: number
  declare sku: string
  declare quantity: number
  declare idCategory: number
}

Product.init(
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
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sku: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idCategory: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    tableName: 'products'
  }
)

Product.hasMany(ProductImage, { as: 'ProductImages', foreignKey: 'idProduct' })
