import { Express } from 'express'
import express = require('express')
import passport = require('passport')
import { bodyParser, cors, LocalStrategy, jwtStrategy } from '../middlewares/'

export default (app: Express): void => {
  app.use(express.static('public'))
  app.use(bodyParser)
  app.use(cors)
  passport.use(LocalStrategy)
  passport.use(jwtStrategy)
}
