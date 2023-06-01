import React, { lazy, Suspense } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'

const Mentor = lazy(() => import('./pages/Mentor/Mentor'))
const Mentee = lazy(() => import('./pages/Mentee/Mentee'))
const Corporate = lazy(() => import('./pages/Corporate/Corporate'))
const ErrorPage = lazy(() => import('./pages/Error/ErrorPage'))

export default function App() {
  function mapRoutes() {
    return routes.map(menu => {
      return <Route path={menu.to} element={lazy(() => menu.element)}></Route>
    })
  }
  return (
    <>
      <Navbar></Navbar>
      Content here
      <br />
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Mentor></Mentor>} />
            <Route path="/client" element={<Mentee></Mentee>} />
            <Route path="/corporate" element={<Corporate></Corporate>} />
            <Route path="*" element={<ErrorPage></ErrorPage>} />
          </Routes>
        </Suspense>
      </div>
    </>
  )
}
