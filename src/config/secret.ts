const secret = {
  APP_NAME: import.meta.env.VITE_APP_NAME ?? 'Vite',
  APP_MODE: import.meta.env.VITE_APP_MODE ?? 'development',

  SERVER_TIMEOUT: 1000 * 30, // miliseconds
  SERVER_URL: import.meta.env.VITE_SERVER_URL,
}

export default secret
