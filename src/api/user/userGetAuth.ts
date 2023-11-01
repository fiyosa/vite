import axios, { AxiosPromise } from 'axios'
import secret from '../../config/secret'
import { headerAxios, throwAxios } from '../../utils/axiosUtil'

export const userGetAuth = async (token?: string): AxiosPromise<any> => {
  return axios({
    method: 'get',
    url: secret.SERVER_URL + '/api/auth/user',
    headers: token
      ? {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        }
      : headerAxios.auth,
    timeout: secret.SERVER_TIMEOUT,
  })
    .then((res) => {
      return res
    })
    .catch((res) => {
      return throwAxios(res)
    })
}
