import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/static/layout/Layout'
import secret from '../config/secret'
import NotFound from './404'
import Home from './guest/Home'
import { logInfo } from '../utils/helper'
import Login from './guest/Login'
import ReactQuery from './guest/ReactQuery'
import { axiosUtil } from '../utils'

export default function Path() {
  logInfo(secret)
  axiosUtil.interceptors()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react-query" element={<ReactQuery />} />
        <Route path="/login" element={<Login />} />
        <Route path="" element={<Layout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
