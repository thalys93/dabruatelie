// Imports Do React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Imports do React Tooltip
import 'react-tooltip/dist/react-tooltip.css'

// Import das Rotas
import Routes from './routes/Routes'

// Import de CSS Global
import './css/global.css'
import './css/fonts.css'
import './css/anim.css'
import './css/respons.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <Routes />    
  </React.StrictMode>,
)
