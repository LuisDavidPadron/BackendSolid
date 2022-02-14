import { Strategy, ExtractJwt } from 'passport-jwt'

const { config } = require('../../config/config')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secret
}

export const jwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload)
})
