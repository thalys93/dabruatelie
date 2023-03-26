// Imports Do React
import React from 'react'
import ReactDOM from 'react-dom/client'
// Imports do React Tooltip
import 'react-tooltip/dist/react-tooltip.css'

// Import das Rotas
import Routes from './routes/Routes'

// Import de CSS Global
import './global/index.css'
import './global/fonts.css'
import './global/anim.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <Routes />    
  </React.StrictMode>,
)
