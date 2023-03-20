import { Link } from "react-router-dom"

// Import dos Estilos
import "./navbar.css"


function Navbar(){


    function mostrarBarra (){

        const div = document.getElementById("DivButton");
        const btn1 = document.getElementById("divBtn1");
        const btn2 = document.getElementById("divBtn2")

        div.style.height = "60pt";    

        btn1.style.display = "flex";
        btn2.style.display = "flex";

    }



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
                                    <button id="adm" hidden>
                                        Admin
                                    </button>  
                                </Link>        
                            </div>
                    </ul>

                    <ul>
                        <Link to="Contato">Contato</Link>
                    </ul>                
                </list>
                <list>
                        <button className="listaInfo" id="DivButton" onClick={mostrarBarra} >
                    <ul>
                        <button className="sairSessao" id="divBtn1"> Edição </button>
                    </ul>

                    <ul>
                        <button className="sairSessao" id="divBtn2"> Deslogar </button>
                    </ul>
                        </button>
                </list>
            </div> 
        </div>       
    </nav>
    )
}

export default Navbar