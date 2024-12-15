import { atom } from 'jotai'

type IInit = number

const init: IInit = 0

export const count = atom(init)
