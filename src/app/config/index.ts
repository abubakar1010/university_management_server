import dotenv from 'dotenv'

dotenv.config()


export const config = {
    port: process.env.PORT,
    db_uri: process.env.DB_URI
}