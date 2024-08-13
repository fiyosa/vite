import secret from '../config/secret'

export const logInfo = (msg: any) => {
  if (secret.APP_MODE === 'development') {
    // eslint-disable-next-line no-console
    console.log(msg)
  }
}
