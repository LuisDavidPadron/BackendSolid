import { UserCreationAttributes } from '../../domain/models/userModel'
import { User } from '../../domain/useCases/user'

export class FakeAddDestinatary implements User {
  async add (destinatary: UserCreationAttributes): Promise<any> {
    return destinatary
  }

  async update (): Promise<any> {
    return ''
  }

  async get (): Promise<any> {
    return ''
  }
}
