import { Optional, Model, DataTypes } from 'sequelize'
import { sequelize } from '../../infraestructure/db/postgreSQL/pg-connect'

// 🥇

export interface RoleAttributes {
  id?: number
  name: string
}

export interface RoleCreationAttributes extends Optional<RoleAttributes, 'id'> {}

export class Role extends Model<RoleAttributes, RoleCreationAttributes> implements RoleAttributes {
  declare id: number
  declare name: string
  declare roleId: number
}

Role.init(
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
    }
  },
  {
    sequelize,
    tableName: 'roles'
  }
)
