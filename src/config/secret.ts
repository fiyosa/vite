import dotenv from 'dotenv'
dotenv.config()

export const secret = {
  APP_NAME: process.env.APP_NAME,
  APP_MODE: process.env.APP_MODE,

  SERVER_URL: process.env.SERVER_URL,
}
