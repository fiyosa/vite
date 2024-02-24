/* eslint-disable @typescript-eslint/no-unused-vars */

interface IGet {
  count: number
}

const get: IGet = {
  count: 0,
}

const set = (_: IGet) => {}

const countContext = { get, set, init: () => {} }

export default countContext
