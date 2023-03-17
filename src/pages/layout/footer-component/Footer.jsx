// Import dos Estilos
import "./footer.css"


let dabruimg = "/img/DabruNegativo.png"

function Footer(){
    return(
        <div>
            <div id="formatar">
            <footer >
                <img height={80} src={dabruimg}/>
            </footer>
            </div>
        </div>
    )
}

export default Footer