import axios, { AxiosPromise } from 'axios'
import secret from '../../config/secret'
import { headerAxios, throwAxios } from '../../utils/axiosUtil'

interface IProps {
  username: string
  password: string
}

export const guestPostSignin = async (props: IProps): AxiosPromise<any> => {
  return axios({
    method: 'post',
    url: secret.SERVER_URL + '/api/auth/login',
    headers: headerAxios.guest,
    timeout: secret.SERVER_TIMEOUT,
    data: {
      username: props.username,
      password: props.password,
    },
  })
    .then((res) => {
      return res
    })
    .catch((res) => {
      return throwAxios(res)
    })
}
