import ReactDOM from 'react-dom/client'
import Path from './pages/Path'
import { ContextProvider } from './context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ContextProvider>
      <Path />
    </ContextProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)
