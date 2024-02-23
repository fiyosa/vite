import { useContext } from 'react'
import { SetupContext } from '../context'

export default function Test() {
  const { countContext } = useContext(SetupContext)

  return <>{countContext.get.count}</>
}
