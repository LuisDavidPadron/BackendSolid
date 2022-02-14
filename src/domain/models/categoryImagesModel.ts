import { Optional, Model, DataTypes } from 'sequelize'
import { sequelize } from '../../infraestructure/db/postgreSQL/pg-connect'
import { Category } from './categoryModel'

export interface CategoryImageAttributes {
  id?: number
  imgURL: string
  idCategory?: number
}

export interface CategoryImageCreationAttributes extends Optional<CategoryImageAttributes, 'id'> {}

export class CategoryImage extends Model<CategoryImageAttributes, CategoryImageCreationAttributes> implements CategoryImageAttributes {
  declare id: number
  declare imgURL: string
  declare idCategory: number
}

CategoryImage.init(
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
    idCategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    tableName: 'categoryImages'
  }
)
