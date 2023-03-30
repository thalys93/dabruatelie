import {React , useState} from 'react'
import { Link } from "react-router-dom"

function Hamburguer() {

    const [menuAberto, setMenuAberto] = useState(false);

    function handleClick() {
        setMenuAberto(!menuAberto);

    }
  return (
            <div id="barraHam">                                                                        
            <button onClickCapture={handleClick} className={menuAberto ? 'btnHam' : 'btnHamAbv'}>
                <i className="bi bi-list" id={menuAberto ? "hamIcon" : "hamIconAbv"}/>
            </button>
                <list id="hamList" className='listaHamburguer'>
                    <div className={menuAberto ? 'Hamburguer' : 'Hamburguer-Show'}>
                    <ul>
                        <Link to= "/">Inicio</Link>
                    </ul>
                    <ul>
                        <Link to="Sobre">Sobre</Link>                        
                    </ul>
                    <ul>
                        <Link to="Produtos">Produtos</Link>
                    </ul>
                    <ul>
                        <Link to="Contato">Contato</Link>
                    </ul>
                    <ul>
                        <Link to="Login">Login</Link>
                    </ul>
                    </div>
                </list>
            </div>
  )
}

export default Hamburguer