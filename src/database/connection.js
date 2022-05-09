import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const connection = new Sequelize(
    'postgres://admin:XLvmdMuS57Dl2gzJNCgatjoAmrsOXqhr@dpg-c9slc0uhb05i3qb0eet0-a.oregon-postgres.render.com/db_hollywood_azm9',
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)