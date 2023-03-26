// Link do React Router
import { Link } from "react-router-dom"

// Link do UseState
import { useState } from "react";

// Modo Editor
import ModoEditor from "../modo-editor-component/ModoEditor"

// Import dos Estilos
import "./navbar.css"


function Navbar() {

// Funções de Mostrar Barras De Navegação Após autenticação
    function mostrarBarra (){                     
        // Formata o Tamanho da Div
        const div = document.getElementById("DivButton");
        div.style.height = "95pt"
        div.style.width = "75pt"
        
        // Altera Opacidade Dos Botões
        const btn1 = document.getElementById('divBtn1')              
        const btn2 = document.getElementById('divBtn2')  
        const btn3 = document.getElementById('divBtn3')

        btn1.style.display = "flex"
        btn2.style.display = "flex"
        btn3.style.display = "flex"
    };    

    function fecharBarra (){        
        // Formata o Tamanho da Div
        const div = document.getElementById("DivButton");
        div.style.height = "5pt"
        div.style.width = "55pt"
        
        // Altera Opacidade e Tempo Dos Botões
        const btn1 = document.getElementById('divBtn1')      
        const btn2 = document.getElementById('divBtn2')                      
        const btn3 = document.getElementById('divBtn3')

        btn1.style.display = "none"
        btn2.style.display = "none"
        btn3.style.display = "none"
  
    };

// Funções de Mostrar Barra de Login (antes da autenticação)

    function mostrarBarra2 () {

    }

    function fecharBarra2 () {
        
    }

   // Função para Ativar e Desativar A Edição (ADMIN) 
   const [showEdit, setShowEdit] = useState(false);
   
    function ativarEdição (){
        setShowEdit(current => !current)
    };

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
                                    <button id="adm" onClickCapture={mostrarBarra2}>
                                        Login
                                    </button>  
                                </Link>        
                            </div>
                    </ul>

                    <ul>
                        <Link to="Contato">Contato</Link>
                    </ul>                
                </list>
                <list>
                        <div className="listaInfo" id="DivButton" onClickCapture={mostrarBarra} hidden>
                    <ul>
                        <button className="sairSessao" id="divBtn1" onClick={ativarEdição}> Edição </button>
                    </ul>

                    <ul>
                        <button className="sairSessao" id="divBtn2"> Deslogar </button>
                    </ul>
                    <ul>
                        <button className="botaoSair" id="divBtn3" onClickCapture={fecharBarra} > - </button>
                    </ul>
                        </div>
                </list>
            </div>             
        </div>               
        {showEdit && <ModoEditor/> }
        
    </nav>
    )
}

export default Navbar
