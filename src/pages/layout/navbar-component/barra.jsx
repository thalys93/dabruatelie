import { React,  useState } from "react";
import { Link } from "react-router-dom"

import ModoEditor from "../modo-editor-component/ModoEditor"

function BarraNav() {
  
    function mostrarBarraAdmin (){                     
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

    function fecharBarraAdmin (){        
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
   const [showEdit, setShowEdit] = useState(false);   
    function ativarEdição (){
        setShowEdit(current => !current)
    };

    const [BtnAbrir, setBtnAbrir] = useState(false);
    function openLogin(){
        setBtnAbrir(current => !current)
    }



  return (
        <div id="barra">               
            <div id="logoDesk">
            <Link to= "/">
            <button id = "btn" />                                        
            </Link>        
            </div>             
            <div id="lista">
                <list>
                    <ul>
                        <Link to="Sobre">Sobre</Link>
                    </ul>

                    <ul>
                        <Link to="Produtos">Produtos</Link>
                            <div onClickCapture={openLogin}>                                
                                    <button id={BtnAbrir ? "adm" : "admOpen"} >
                                      <Link 
                                      to="Login" 
                                      id={BtnAbrir ? "LinkToLogin" : "linkToLoginOpen"}
                                      >Login</Link>                                        
                                    </button>                                          
                            </div>
                    </ul>

                    <ul>
                        <Link to="Contato">Contato</Link>
                    </ul>                
                </list>
                <list>
                        <div className="listaInfo" id="DivButton" onClickCapture={mostrarBarraAdmin} hidden>
                    <ul>
                        <button className="sairSessao" id="divBtn1" onClick={ativarEdição}> Edição </button>
                    </ul>

                    <ul>
                        <button className="sairSessao" id="divBtn2"> Deslogar </button>
                    </ul>
                    <ul>
                        <button className="botaoSair" id="divBtn3" onClickCapture={fecharBarraAdmin} > - </button>
                    </ul>
                        </div>
                </list>
            </div>
          {showEdit && <ModoEditor/> }                        
        </div> 
  )
}

export default BarraNav