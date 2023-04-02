import React from 'react'

// Configurando Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Importando as Paginas
import App from '../App'
import Home from '../pages/home/Home'
import Contato from '../pages/contato/Contato'
import Sobre from '../pages/sobre/Sobre'
import Produtos from '../pages/produtos/Produtos'

// Login e Dashboard
import Login from "../pages/auth/login/login"
import Dashboard from '../pages/auth/dashboard/dashboard'

import ErrorPage from '../pages/error-page/ErrorPage'
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