import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const ScrollTopButton = lazy(() => import('./components/ScrollTopButton'))
const Layout = lazy(() => import('./layouts/Layout'))
const Home = lazy(() => import('@pages/Home/Home'))
const Mentee = lazy(() => import('./pages/Mentee/Mentee'))
const Corporate = lazy(() => import('./pages/Corporate/Corporate'))
const ErrorPage = lazy(() => import('./pages/Error/ErrorPage'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense>
          <Layout />
        </Suspense>
      }
      errorElement={
        <Suspense>
          <ErrorPage />
        </Suspense>
      }
    >
      <Route
        index
        element={
          <Suspense>
            <Home />
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
      <Suspense>
        <ScrollTopButton></ScrollTopButton>
      </Suspense>
      <RouterProvider router={router} />
    </>
  )
}
