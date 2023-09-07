import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/dinamic/layout/layout'
import NotFound from './pages/404'
import Home from './pages/home/home'

export default function Path() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="" element={<Layout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
