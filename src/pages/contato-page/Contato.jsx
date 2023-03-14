// Import dos Estilos
import './contatos.css'

function Contato(){
    return(
        <div>

            <section id="Contato">
                <div id="item" className="animate__animated animate__fadeIn">
                <i className="bi bi-facebook"></i> 
                <a href="">Facebook - Dabru Ateliê</a>
                </div>

                <div id="item" className="animate__animated animate__fadeIn">
                <i className="bi bi-instagram"></i> 
                <a href="https://www.instagram.com/dabruatelie/" rel="noopener noreferrer " target="_blank">Instagram - @dabruatelie </a>
                </div>            


                <div id="item" className="animate__animated animate__fadeIn">
                    <i className="bi bi-envelope"></i> 
                    <a href="">Email - dabruatelie@email.com</a>
                </div>
                    <br/>
                <span id="spanContato" className="animate__animated animate__fadeIn"> 
                Ficou Curiosa? 
                <br/> 
                Me Chama no Whats 
                <br/>
                <a 
                href="https://bit.ly/3YVkoEF" 
                target="_blank" 
                rel="noopener noreferrer" 
                id="whatsapp">
                    <i className="bi bi-whatsapp" ></i>
                </a>
                </span>                    
            </section>
            
        </div>
    )
}

export default Contato