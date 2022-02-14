import { Sequelize } from 'sequelize'

const uri: string = process.env.URI ?? 'postgres://postgres:12345678@localhost:5432/postgres'

export const sequelize = new Sequelize(uri, { logging: false })
