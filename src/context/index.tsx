import { ReactNode, createContext, useState } from 'react'
import { countCtx } from './countCtx'

export const SetupContext = createContext({
  countCtx,
})

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(countCtx.get)

  const value = {
    countCtx: { get: count, set: setCount, init: () => setCount(countCtx.get) },
  }

  return <SetupContext.Provider value={value}>{children}</SetupContext.Provider>
}
