import {
  Identifier
  // QueryTypes
} from 'sequelize'
import { Empresa, EmpresaAttributes, EmpresaCreationAttributes } from '../domain/models/empresaModel'
import { UserEmpresa, UserEmpresaAttributes } from '../domain/models/userEmpresaModel'
import { unlink } from 'fs-extra'
// import { sequelize } from '../infraestructure/db/postgreSQL/pg-connect'

export class EmpresaService {
  async create (data: EmpresaCreationAttributes): Promise<EmpresaCreationAttributes> {
    const empresaNew: Empresa = await Empresa.create(data)
    return empresaNew
  }

  async update (data: EmpresaCreationAttributes, id: Identifier): Promise<EmpresaCreationAttributes | null> {
    let empresa = await Empresa.findByPk(id)

    if (data.logo && empresa?.logo) await unlink(empresa.logo)
    if (empresa) empresa = await empresa.update(data)
    return empresa
  }

  async delete (id: Identifier): Promise<EmpresaCreationAttributes | null> {
    const empresa: Empresa | null = await Empresa.findByPk(id)
    if (empresa) await empresa.destroy()
    return empresa
  }

  async get (): Promise<EmpresaAttributes[]> {
    const empresas: Empresa[] = await Empresa.findAll({
      attributes: ['id', 'phoneNumber', 'name', 'mail', 'identifierEmpresa', 'logo']
    }) // sequelize.query('SELECT "phoneNumber", name, mail FROM users', { type: QueryTypes.SELECT })
    return empresas
  }

  async findEmail (mail: string): Promise<EmpresaAttributes | null> {
    const users: Empresa | null = await Empresa.findOne({
      // attributes: ['id', 'phoneNumber', 'name', 'mail', 'password'],
      // include: [
      //   { model: Role, attributes: ['name'] },
      //   { model: Empresa }
      // ],
      where: {
        mail
      }
    })

    return users
  }

  async createUserEmpresa (UserId: number, EmpresaId: number): Promise<UserEmpresaAttributes | null> {
    return await UserEmpresa.create({
      UserId,
      EmpresaId
    })
  }
}

export default new EmpresaService()
