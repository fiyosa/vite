import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/static/layout/layout'
import secret from '../config/secret'
import NotFound from './404'
import Home from './home/home'

export default function Path() {
  console.log(secret)

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
