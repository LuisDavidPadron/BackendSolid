import { Identifier } from 'sequelize'
import { EmpresaCreationAttributes } from '../models/empresaModel'

export interface Empresa {
  add: (empresa: EmpresaCreationAttributes, id: Identifier) => Promise<EmpresaCreationAttributes>
  update: (empresa: EmpresaCreationAttributes, id: Identifier) => Promise<EmpresaCreationAttributes | null>
  get: () => Promise<EmpresaCreationAttributes[]>
  delete: (id: Identifier) => Promise<EmpresaCreationAttributes | null>
}
