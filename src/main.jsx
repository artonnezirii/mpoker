import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/scss/style.scss'

import Home from './pages/Home.jsx'
import Error from './pages/Error.jsx'
import MainLayout from './pages/MainLayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children:[
      {
        path:'/',
        element: <Home />
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
