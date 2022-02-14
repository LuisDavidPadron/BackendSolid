import { compare } from 'bcryptjs'
import { Strategy } from 'passport-local'
import { sign } from 'jsonwebtoken'
import userService from '../../../../services/userService'
import { UserCreationAttributes } from '../../../../domain/models/userModel'

const { config } = require('../../../config/config')

export const LocalStrategy = new Strategy(async (mail, password, done) => {
  try {
    const user: UserCreationAttributes | null = await userService.findEmail(mail)

    if (!user) {
      return done(false)
    } else {
      const validPassword = await compare(password, user.password)

      user.password = ''
      const token = sign({ id: user.id, role: user.Role.name }, config.secret, {
        expiresIn: '7d'
      })

      return !validPassword ? done(false) : done(null, { token, user })
    }
  } catch (error) {
    return done(error, false)
  }
})
