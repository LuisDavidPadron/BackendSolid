import { Optional, Model, DataTypes } from 'sequelize'
import { sequelize } from '../../infraestructure/db/postgreSQL/pg-connect'
import { Category } from './categoryModel'

// 🥇

export interface EmpresaAttributes {
  id: number
  name: string
  mail: string
  logo?: string
  identifierEmpresa?: string
  phoneNumber?: string
}

export interface EmpresaCreationAttributes extends Optional<EmpresaAttributes, 'id'> {}

export class Empresa extends Model<EmpresaAttributes, EmpresaCreationAttributes> implements EmpresaAttributes {
  declare id: number
  declare name: string
  declare mail: string
  declare logo?: string
  declare identifierEmpresa?: string
  declare phoneNumber?: string
}

Empresa.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    identifierEmpresa: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize,
    tableName: 'empresas'
  }
)

Empresa.hasMany(Category, { as: 'Category', foreignKey: 'idEmpresa' })
