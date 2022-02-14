import { Model, DataTypes, Identifier } from 'sequelize'
import { sequelize } from '../../infraestructure/db/postgreSQL/pg-connect'

// 🥇

export interface UserEmpresaAttributes {
  UserId: Identifier
  EmpresaId: Identifier
}

export class UserEmpresa extends Model<UserEmpresaAttributes> implements UserEmpresaAttributes {
  declare UserId: Identifier
  declare EmpresaId: Identifier
}

UserEmpresa.init(
  {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EmpresaId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'UserEmpresa'
  }
)
