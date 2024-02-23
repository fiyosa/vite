import { ReactNode, createContext, useState } from 'react'
import countContext from './countContext'

export const SetupContext = createContext({
  countContext,
})

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(countContext.get)

  const value = {
    countContext: { get: count, set: setCount },
  }

  return <SetupContext.Provider value={value}>{children}</SetupContext.Provider>
}
