interface IGet {
  count: number
}

const get: IGet = {
  count: 0,
}

export const countCtx = { get, set: (_: IGet) => {}, init: () => {} }
