import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import HomeMentee from '@pages/Mentee/HomeMentee'
import HomeMentor from '@pages/Mentor/HomeMentor'
import AboutUs from './pages/About-Us/AboutUs'

const ScrollTopButton = lazy(() => import('./components/ScrollTopButton'))
const Layout = lazy(() => import('./layouts/Layout'))
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
      <Route index element={<HomeMentee />} />
      <Route path="/mentor" element={<HomeMentor />} />
      <Route path="/about-us" element={<AboutUs />} />
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
