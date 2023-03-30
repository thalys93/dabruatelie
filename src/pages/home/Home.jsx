// Import dos Estilos
import  "./home.css"

import { Link } from "react-router-dom"

function Home(){
    return(            
        <section id="Inicio" className="styles.animate__animated animate__fadeIn">                 
          <h3 className="animate__animated animate__fadeIn" id="dabru"> Dabru <br/> Ateliê </h3>    
            <p id="deco">-</p>         
              <h4 className="animate__animated animate__fadeIn" id="tabx"> 
                    Descobri no crochê a paixão por artes <br />
                    Manuais e hoje transformei meu <br />
                    hobbie em trabalho</h4>                             
                <div id="btns">
                    <a>                                           
                        <Link link to="Sobre" id="link" className="animate__animated animate__fadeIn animate__delay-1s"><i className="bi bi-plus-circle"/> Saiba Mais </Link>
                    </a>

                    <a>                        
                        <Link link to="Produtos" id="link" className="animate__animated animate__fadeIn animate__delay-2s" > <i className="bi bi-cart3"/>  Produtos </Link>
                    </a>
                </div>
            </section>                      
    )
}

export default Home