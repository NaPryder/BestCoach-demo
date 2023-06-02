import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.scss'
import { Suspense, lazy } from 'react'

// pages
// import Mentor from './pages/Mentor/Mentor'
// import Mentee from './pages/Mentee/Mentee'
// import Corporate from './pages/Corporate/Corporate'
// import Layout from './layouts/Layout'

const Layout = lazy(() => import('./layouts/Layout'))
const Mentor = lazy(() => import('./pages/Mentor/Mentor'))
const Mentee = lazy(() => import('./pages/Mentee/Mentee'))
const Corporate = lazy(() => import('./pages/Corporate/Corporate'))
// const ErrorPage = lazy(() => import('./pages/Error/ErrorPage'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense>
          <Layout />
        </Suspense>
      }
    >
      <Route
        index
        element={
          <Suspense>
            <Mentor />
          </Suspense>
        }
      />
      <Route
        path="/client"
        element={
          <Suspense>
            <Mentee />
          </Suspense>
        }
      />
      <Route
        path="/corporate"
        element={
          <Suspense>
            <Corporate />
          </Suspense>
        }
      />
      {/* <Route path="/corporate" element={<Corporate />} /> */}
    </Route>
  )
)

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
