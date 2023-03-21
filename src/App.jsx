import Footer from "./pages/layout/footer-component/Footer"
import Navbar from "./pages/layout/navbar-component/Navbar"
import { useState } from "react";

import { Outlet } from "react-router-dom"



function App(){  


  return (      
    <main>            
      <Navbar/>           
        <Outlet/>    
      <Footer />
    </main>
  )
}

export default App