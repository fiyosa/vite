import { AxiosPromise } from 'axios'
import { axiosUtil } from '../../utils'

interface IProps {
  paylod: {
    name: string
    job: string
  }
}

export const postUser = async (props: IProps): AxiosPromise<any> => {
  return axiosUtil
    .instance({
      method: 'post',
      url: '/users',
      headers: axiosUtil.headerAxios.guest,
      data: {
        name: props.paylod.name,
        // job: props.paylod.job,
      },
    })
    .then((res) => res)
    .catch((res) => axiosUtil.throwAxios(res))
}
