import { Link } from "react-router-dom"

// Import dos Estilos
import "./navbar.css"


function Navbar(){
    return(
    <nav >
        <div id = "barra">
            <Link to= "/">
                <button id = "btn" />                                        
            </Link>        
                
            <div id="lista">
                <list>
                    <ul>
                        <Link to="Sobre">Sobre</Link>
                    </ul>

                    <ul>
                        <Link to="Produtos">Produtos</Link>
                            <div id="btnAdm">
                                <Link to="Login">
                                    <button id="adm">
                                        Admin
                                    </button>  
                                </Link>        
                            </div>
                    </ul>

                    <ul>
                        <Link to="Contato">Contato</Link>
                    </ul>                

                    <ul>
                        <button className="sairSessao" > Deslogar </button>
                    </ul>
                </list>
            </div> 
        </div>       
    </nav>
    )
}

export default Navbar