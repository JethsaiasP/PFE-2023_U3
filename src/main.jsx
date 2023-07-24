import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
}from"react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Ciudad_de_Sol from './Components/Ciudad_de_Sol.jsx'
import Tareas from './Components/Tareas/Tareas'

const router = createBrowserRouter([
  {
   path:"/",
    element: <App />,
  },
  {
    path:"/Ciudad",
    element:<Ciudad_de_Sol />
  },
  {
    path:"/tareas",
    element:<Tareas />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
