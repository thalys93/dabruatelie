import React from 'react'

// Configurando Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Importando as Paginas
import App from '../App'
import Home from '../pages/home-page/Home'
import Contato from '../pages/contato-page/Contato'
import Sobre from '../pages/sobre-page/Sobre'
import Produtos from '../pages/produtos-page/Produtos'

// Login e Dashboard
import Login from "../pages/auth/login-component/login"
import Dashboard from '../pages/auth/dashboard/dashboard'

import ErrorPage from '../pages/layout/error-page/ErrorPage'
// Rotas do React Router
const router = createBrowserRouter([
    // Rotas Gerais
    {
    path: "/",
    element: <App />,    
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
    ],
    },

    // Página De Login
    {          
      path: "/Login",
      element: <Login/>,
    },
    // Dashboard
    {          
      path: "/Dashboard",
      element: <Dashboard />        
    }

]);

function Routes() {
  return (
    <RouterProvider router={router}/>         
  )
}

export default Routes