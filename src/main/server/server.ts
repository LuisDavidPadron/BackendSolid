import { sequelize } from '../../infraestructure/db/postgreSQL/pg-connect'
import app from '../config/app'

app.listen(process.env.PORT, async () => {
  console.log(`work Port: \x1b[32m%s\x1b[0m ${process.env.PORT}`)
  await sequelize.sync()
})
