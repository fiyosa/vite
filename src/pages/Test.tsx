import { useContext } from 'react'
import { SetupContext } from '../context'

export default function Test() {
  const { countCtx } = useContext(SetupContext)

  return <>{countCtx.get.count}</>
}
