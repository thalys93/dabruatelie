// Imports Do React
import { React } from "react";

// Componentes Principais
import Hamburguer from "./barraHam";
import BarraNav from "./barra";

// Import dos Estilos
import "./navbar.css"



function Navbar() {


    return(
    <nav>        
        <BarraNav />
        <Hamburguer />                                    
    </nav>
    )
}

export default Navbar
