import { Optional, Model, DataTypes } from 'sequelize'
import { sequelize } from '../../infraestructure/db/postgreSQL/pg-connect'
import { Role } from './roleModel'
import { genSaltSync, hash } from 'bcryptjs'
import { Empresa } from './empresaModel'
import { UserEmpresa } from './userEmpresaModel'

export interface UserAttributes {
  id?: number
  name?: string
  mail?: string
  phoneNumber?: number
  password: string
  roleId?: number
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {
  [x: string]: any
}

export class User extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
  declare id: number
  declare name: string
  declare phoneNumber: number
  declare password: string
  declare mail: string
  declare roleId: number
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    hooks: {
      beforeCreate: async (user, options) => {
        const salt = await genSaltSync(10)
        const password = await hash(user.password.toString(), salt)
        user.password = password
      },
      beforeUpdate: async (user, options) => {
        const salt = await genSaltSync(10)
        const password = await hash(user.password.toString(), salt)
        user.password = password
      }
    },
    sequelize,
    tableName: 'users'
  }
)
User.belongsToMany(Empresa, { through: UserEmpresa })
User.belongsTo(Role, { foreignKey: 'roleId', targetKey: 'id' })
