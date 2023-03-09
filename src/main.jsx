// Imports Do React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import de CSS Global
import './css/index.css'
import './css/fonts.css'
import './css/anim.css'

// Configurando Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Importando as Paginas
import App from './App'
import Home from './pages/home-page/Home'
import Contato from './pages/contato-page/Contato'
import Sobre from './pages/sobre-page/Sobre'
import Produtos from './pages/produtos-page/Produtos'
import ErrorPage from './pages/layout/error-page/ErrorPage'
import Login from './pages/auth/login'


const router = createBrowserRouter([
    {
    path: "/",
    element: <App />,
    // Págin de Error
    errorElement: <ErrorPage />,
    children: [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Sobre",
    element: <Sobre />
  },
  {
    path: "/Produtos",
    element: <Produtos />
  },
  {
    path: "/Contato",
    element: <Contato />
  },
  {
    path: "/Login",
    element: <Login />
  },
    ],
  }

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>    
  </React.StrictMode>,
)
