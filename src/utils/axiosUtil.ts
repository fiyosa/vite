import axios from 'axios'
import secret from '../config/secret'

export const headerAxios = {
  guest: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  auth: {
    Accept: 'application/json',
    Authorization: `Bearer ${window.localStorage.getItem('token') ?? ''}`,
  },
  form: {
    Authorization: `Bearer ${window.localStorage.getItem('token') ?? ''}`,
  },
}

export const throwAxios = (res: any) => {
  if (res?.response) {
    return res?.response
  }
  if (res?.request) {
    return {
      status: 400,
      data: { message: 'Unable to connect to the server. Check your internet connection.' },
    }
  }
  return {
    status: 500,
    data: { message: 'An error occurred that could not be identified.' },
  }
}

interface IProps {
  query?: Record<string, string | number | boolean>
}
export const createQueryStr = (props?: IProps): string => {
  if (!props?.query) return ''

  let params = ''
  for (const key in props.query) {
    if (props.query.hasOwnProperty.call(props.query, key)) {
      const queryKey = key as keyof IProps['query']
      const queryValue = props.query[queryKey]
      params += `&${queryKey}=${queryValue}`
    }
  }
  if (params.length !== 0) params = '?' + params.substring(1)
  return params
}

export const instance = axios.create({
  baseURL: secret.SERVER_URL + '/api',
  timeout: 1000 * 1,
})

export const interceptors = () => {
  axios.interceptors.request.use((res) => {
    return res
  })

  axios.interceptors.response.use(async (res) => {
    return res
  })
}
