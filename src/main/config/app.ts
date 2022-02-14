// Instances not test in this file, do you have test isolates to come here
import express = require('express')
import { config as dotenv } from 'dotenv'
import routes from './routes'
import middlewares from './middlewares'

const app = express()
middlewares(app)
// Routes init
routes(app)
dotenv()
export default app
