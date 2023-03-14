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

// Página Inicial
import Home from './pages/home-page/Home'

// Contato
import Contato from './pages/contato-page/Contato'

// Sobre
import Sobre from './pages/sobre-page/Sobre'

// Produtos
import Produtos from './pages/produtos-page/Produtos'

// Página de Erro
import ErrorPage from './pages/layout/error-page/ErrorPage'

// Autenticação
import Login from './pages/auth/Login'
import Dashboard from "./pages/auth/admin/dashboard/dashboard"

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
    element: <Produtos />,    
  },
  {
    path: "/Contato",
    element: <Contato />    
  },
  {
    // Autenticação
    path: "/",    
    children: [
      {
        path: "auth/Login",
        element: <Login />
      },

      {
        path: "/auth/Dashboard",
        element: <Dashboard />
      }
    ]    
  },

    ],
  }

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>    
  </React.StrictMode>,
)
