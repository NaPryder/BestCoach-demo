import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'

import Root from './routes/root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
])
// let routes = createRoutesFromElements(
//   <Route path="/" element={<App />}>
//     <Route path="Mentor" lazy={() => import('./pages/Mentor.jsx')} />
//     <Route path="Mentee" lazy={() => import('./pages/Mentee.jsx')} />
//   </Route>
// )
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </React.StrictMode>
)
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App></App>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )
