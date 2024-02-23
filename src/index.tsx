import ReactDOM from 'react-dom/client'
import Path from './pages/Path'
import { ContextProvider } from './context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ContextProvider>
    <Path />
  </ContextProvider>
)
