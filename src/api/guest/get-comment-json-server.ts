import axios, { AxiosPromise } from 'axios'
import secret from '../../config/secret'
import { axiosUtil } from '../../utils'

interface IProps {
  query?: {
    _page?: string | number
    _limit?: string | number
  }
}

export const getCommentJsonServer = async (props?: IProps): AxiosPromise<any> => {
  return axios({
    method: 'get',
    url: `https://jsonplaceholder.typicode.com/comments${axiosUtil.createQueryStr(props)}`,
    headers: axiosUtil.headerAxios.guest,
    timeout: secret.SERVER_TIMEOUT,
  })
    .then((res) => res)
    .catch((res) => axiosUtil.throwAxios(res))
}
