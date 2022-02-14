import { Optional, Model, DataTypes } from 'sequelize'
import { sequelize } from '../../infraestructure/db/postgreSQL/pg-connect'
import { Product } from './productModel'

export interface ProductImageAttributes {
  id?: number
  imgURL: string
  idProduct?: number
}

export interface ProductImageCreationAttributes extends Optional<ProductImageAttributes, 'id'> {}

export class ProductImage extends Model<ProductImageAttributes, ProductImageCreationAttributes> implements ProductImageAttributes {
  declare id: number
  declare imgURL: string
  declare idProduct: number
}

ProductImage.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    imgURL: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idProduct: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    tableName: 'productImages'
  }
)
