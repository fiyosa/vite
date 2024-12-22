import { AxiosPromise } from 'axios'
import { axiosUtil } from '../../utils'

interface IProps {
  paylod: {
    email: string
    password: string
  }
}

export const postLogin = async (props: IProps): AxiosPromise<any> => {
  return axiosUtil
    .instance({
      method: 'post',
      url: '/login',
      headers: axiosUtil.headerAxios.guest,
      data: {
        email: props.paylod.email,
        password: props.paylod.password,
      },
    })
    .then((res) => res)
    .catch((res) => axiosUtil.throwAxios(res))
}
