import Footer from "./pages/layout/footer-component/Footer"
import Navbar from "./pages/layout/navbar-component/Navbar"

import { Outlet } from "react-router-dom"
import ModoEditor from "./pages/layout/modo-editor-component/ModoEditor"


function App(){
  return (    
    <main>            
      <Navbar />
      <ModoEditor />      
        <Outlet />    
      <Footer />
    </main>
  )
}

export default App