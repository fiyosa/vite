import { useContext, useState } from 'react'
import { ImgReact, ImgVite } from '../../assets/img'
import './home.css'
import Test from '../Test'
import { SetupContext } from '../../context'
import { useStore } from 'zustand'
import useZustand from '../../zustand'
import { useSetAtom } from 'jotai'
import useJotai from '../../jotai'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [count, setCount] = useState(0)
  const { countCtx } = useContext(SetupContext)
  const countZus = useStore(useZustand.count)
  const setCountJo = useSetAtom(useJotai.count)
  const navigate = useNavigate()

  return (
    <div className="App">
      <Test />

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={ImgVite.toString()} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={ImgReact.toString()} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1)
            countCtx.set({ count: count + 1 })
            countZus.set(count + 1)
            setCountJo(count + 1)
          }}
        >
          count is {count}
        </button>
        <button
          style={{ marginLeft: '5px' }}
          onClick={() => {
            setCount(0)
            countCtx.init()
            countZus.init()
            setCountJo(0)
          }}
        >
          Reset
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button onClick={() => navigate('/react-query')}>React Query</button>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default Home
