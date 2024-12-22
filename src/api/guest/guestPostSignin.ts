import axios, { AxiosPromise } from 'axios'
import secret from '../../config/secret'
import { axiosUtil } from '../../utils'

interface IProps {
  username: string
  password: string
}

export const guestPostSignin = async (props: IProps): AxiosPromise<any> => {
  return axios({
    method: 'post',
    url: secret.SERVER_URL + '/api/auth/login',
    headers: axiosUtil.headerAxios.guest,
    data: {
      username: props.username,
      password: props.password,
    },
  })
    .then((res) => res)
    .catch((res) => axiosUtil.throwAxios(res))
}
