import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Path() {
  const Layout = () => {
    return <></>
  }
  const Home = () => {
    return <>Home</>
  }
  const NotFound = () => {
    return <>Not Found</>
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
