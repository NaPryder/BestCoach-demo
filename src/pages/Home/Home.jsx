import React, { lazy, Suspense } from 'react'

const HomeSection1 = lazy(() => import('./HomeSection1'))
const HomeSection2 = lazy(() => import('./HomeSection2'))
const HomeSection3 = lazy(() => import('./HomeSection3'))
const HomeSection4 = lazy(() => import('./HomeSection4'))
const HomeSection5 = lazy(() => import('./HomeSection5'))
const HomeSection6 = lazy(() => import('./HomeSection6'))
const HomeSection7 = lazy(() => import('./HomeSection7'))
const Home = () => {
  const loading = <h2>Loading</h2>
  return (
    <>
      <Suspense fallback={loading}>
        <HomeSection1 />
      </Suspense>
      <Suspense fallback={loading}>
        <HomeSection2 />
      </Suspense>
      <Suspense fallback={loading}>
        <HomeSection3 />
      </Suspense>
      <Suspense fallback={loading}>
        <HomeSection4 />
      </Suspense>
      <Suspense fallback={loading}>
        <HomeSection5 />
      </Suspense>
      <Suspense fallback={loading}>
        <HomeSection6 />
      </Suspense>
      <Suspense fallback={loading}>
        <HomeSection7 />
      </Suspense>
    </>
  )
}

export default Home
