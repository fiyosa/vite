import { AxiosPromise } from 'axios'
import { axiosUtil } from '../../utils'

interface IProps {
  query?: {
    page?: string | number
    per_page?: string | number
  }
}

export const getUsers = async (props?: IProps): AxiosPromise<any> => {
  return axiosUtil
    .instance({
      method: 'get',
      url: `/users${axiosUtil.createQueryStr(props)}`,
      headers: axiosUtil.headerAxios.guest,
    })
    .then((res) => res)
    .catch((res) => axiosUtil.throwAxios(res))
}
