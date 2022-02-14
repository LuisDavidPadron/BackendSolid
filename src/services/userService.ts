import {
  Identifier
  // QueryTypes
} from 'sequelize'
import { Role } from '../domain/models/roleModel'
import { User, UserAttributes, UserCreationAttributes } from '../domain/models/userModel'

// import { sequelize } from '../infraestructure/db/postgreSQL/pg-connect'

export class UserService {
  async create (user: UserCreationAttributes): Promise<UserCreationAttributes> {
    const userNew: User = await User.create(user)
    return userNew
  }

  async update (dataUser: UserCreationAttributes, id: Identifier): Promise<UserCreationAttributes | null> {
    let user: User | null = await User.findByPk(id)
    if (user) {
      user = await user.update(dataUser)
      user.setDataValue('password', '')
    }
    return user
  }

  async delete (id: Identifier): Promise<UserCreationAttributes | null> {
    const user: User | null = await User.findByPk(id)
    if (user) await user.destroy()
    return user
  }

  async get (): Promise<UserAttributes[]> {
    const users: User[] = await User.findAll({
      attributes: ['id', 'phoneNumber', 'name', 'mail'],
      include: [
        { model: Role, attributes: ['name'] }
      ]
    }) // sequelize.query('SELECT "phoneNumber", name, mail FROM users', { type: QueryTypes.SELECT })
    return users
  }

  async findEmail (mail: string): Promise<UserCreationAttributes | null> {
    const users: User | null = await User.findOne({
      attributes: ['id', 'phoneNumber', 'name', 'mail', 'password'],
      include: [
        { model: Role, attributes: ['name'] }
      ],
      where: {
        mail
      }
    })

    return users
  }

  async findById (id: number): Promise<UserCreationAttributes | null> {
    const users: User | null = await User.findOne({
      attributes: ['id', 'phoneNumber', 'name', 'mail'],
      where: {
        id
      }
    })

    return users
  }
}

export default new UserService()
