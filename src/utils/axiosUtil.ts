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
    Accept: 'application/json',
    Authorization: 'Bearer ' + window.localStorage.getItem('token') ?? '',
  },
}

export const throwAxios = (res: any) => {
  if (res?.response) {
    return res?.response
  }
  if (res?.request) {
    return {
      state: 400,
      data: { message: 'Unable to connect to the server. Check your internet connection.' },
    }
  }
  return {
    state: 400,
    data: { message: 'An error occurred that could not be identified.' },
  }
}
