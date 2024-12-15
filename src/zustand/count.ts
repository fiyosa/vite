import { create } from 'zustand'

type IGet = number

const init: IGet = 0

interface ICreate {
  get: IGet
  set: (e: IGet) => void
  init: () => void
}

export const count = create<ICreate>((set) => ({
  get: init,
  set: (e) => set(() => ({ get: e })),
  init: () => set(() => ({ get: init })),
}))
