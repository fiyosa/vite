const secret = {
  APP_NAME: process.env.APP_NAME ?? 'Vite',
  APP_MODE: process.env.APP_MODE ?? 'development',

  SERVER_TIMEOUT: 1000 * 30, // miliseconds
  SERVER_URL: process.env.SERVER_URL,
}

export default secret
