import { Identifier } from 'sequelize/dist'
import { EmpresaAttributes, EmpresaCreationAttributes } from '../../domain/models/empresaModel'
import { User } from '../../domain/models/userModel'
import { Empresa } from '../../domain/useCases/empresa'
import empresaService from '../../services/empresaService'

/*
 *Si se cambia la BD se sebe cambiar esta implementacion y donde se instancia
 */

export class DbEmpresa implements Empresa {
  async add (data: EmpresaCreationAttributes, idUser: Identifier): Promise<EmpresaCreationAttributes> {
    const empresa: EmpresaCreationAttributes = await empresaService.create(data)

    const user: User | null = await User.findByPk(idUser)

    if (user && empresa?.id) await empresaService.createUserEmpresa(user.id, empresa.id)

    return await new Promise(resolve => resolve(empresa))
  }

  async update (data: EmpresaCreationAttributes, id: Identifier): Promise<EmpresaCreationAttributes | null> {
    const dbEmpresa = await empresaService.update(data, id)

    return await dbEmpresa ? await new Promise(resolve => resolve(dbEmpresa)) : await Promise.reject(Error)
  }

  async get (): Promise<EmpresaAttributes[]> {
    const dbEmpresa = await empresaService.get()

    return await new Promise(resolve => resolve(dbEmpresa))
  }

  async delete (id: Identifier): Promise<EmpresaCreationAttributes | null> {
    const dbEmpresa = await empresaService.delete(id)

    return await dbEmpresa ? await new Promise(resolve => resolve(dbEmpresa)) : await Promise.reject(Error)
  }
}
