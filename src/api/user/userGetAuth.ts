import axios, { AxiosPromise } from 'axios'
import secret from '../../config/secret'
import { axiosUtil } from '../../utils'

export const userGetAuth = async (token?: string): AxiosPromise<any> => {
  return axios({
    method: 'get',
    url: secret.SERVER_URL + '/api/auth/user',
    headers: token
      ? {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        }
      : axiosUtil.headerAxios.auth,
  })
    .then((res) => res)
    .catch((res) => axiosUtil.throwAxios(res))
}
