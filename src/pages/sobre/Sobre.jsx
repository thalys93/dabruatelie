import React from 'react'

// Import dos Estilos
import './sobre.css'

let perfil = "/img/logoinvertido_branco.png"

function Sobre(){
    return(                                   
            <section id="Sobre" className="animate__animated animate__fadeIn">

                    <div className='editDiv1'>
                       
                    </div>

                <div id="Pessoa">
                    <img src={perfil} id="perfil" />
                    <span id="spanSobre"> Bruna Dutra </span>
                </div>

                    <div className='editDiv'>
                        
                    </div>

                <div id="Fundo">

                    <p id="txtEdit">
                       Uma História Contando Sobre a Pessoa <br />
                       Sendo Emocionante e Interessante <br />
                       Explicando Motivos e Interesses
                    </p>
                </div>

                    <div className='editDiv'>
                        
                    </div>

                <div id="Fundo">
                    <p id="txtEdit">
                       Exlicando a motivação para Começar o ateliê <br />
                       Há quanto tempo trabalha com Linhas <br />
                       Quando Começou o ateliê
                    </p>
                    
                </div>
                 
            </section>                    
    )
}

export default Sobre