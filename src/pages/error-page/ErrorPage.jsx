// Import dos Estilos
import './error.css'

import { Link } from "react-router-dom"



function ErrorPage (){        

const lordStyle = {
    width:'120px',
    height:'120px'
}


    return(
        <section >   
            <div id="error">
                <h1> Opa!  </h1>
                <h2> Algo deu Errado! </h2>  
            <lord-icon
                src="https://cdn.lordicon.com/sbiheqdr.json"
                trigger="loop"
                delay="1000"
                colors="primary:#ffffff,secondary:#545454"
                style={lordStyle}>
            </lord-icon>  
                <hr />
                <span id="spanError"> Para voltar </span>      
                <br/>
                <Link to="/">
                    <button id="errorbtn">                        
                        <i class="bi bi-bug"/> Clique Aqui
                    </button>
                        </Link>      
            </div>                 
        
        </section>
    )
}

export default ErrorPage
