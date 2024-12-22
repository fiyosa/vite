import { AxiosPromise } from 'axios'
import { axiosUtil } from '../../utils'

interface IProps {
  param: {
    id: string | number
  }
}

export const getUserById = async (props: IProps): AxiosPromise<any> => {
  return axiosUtil
    .instance({
      method: 'get',
      url: `/users/${props?.param.id}`,
      headers: axiosUtil.headerAxios.guest,
    })
    .then((res) => res)
    .catch((res) => axiosUtil.throwAxios(res))
}
