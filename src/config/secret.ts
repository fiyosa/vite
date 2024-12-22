const secret = {
  APP_NAME: `${import.meta.env.VITE_APP_NAME ?? 'Vite'}`,
  APP_MODE: `${import.meta.env.VITE_APP_MODE ?? 'development'}`,

  SERVER_URL: `${import.meta.env.VITE_SERVER_URL ?? 'https://reqres.in/'}`,
}

export default secret
