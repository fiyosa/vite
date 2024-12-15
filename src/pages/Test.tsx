import { useContext } from 'react'
import { SetupContext } from '../context'
import { useStore } from 'zustand'
import useZustand from '../zustand'
import { useAtomValue } from 'jotai'
import useJotai from '../jotai'

export default function Test() {
  const { countCtx } = useContext(SetupContext)
  const countZus = useStore(useZustand.count)
  const countJo = useAtomValue(useJotai.count)

  return (
    <>
      <div>useContext: {countCtx.get.count}</div>
      <div>zustand: {countZus.get}</div>
      <div>jotai: {countJo}</div>
    </>
  )
}
