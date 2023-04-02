import React, {useState} from 'react'
import { Link } from 'react-router-dom';

// Tooltip e Toast
import { Tooltip } from 'react-tooltip'
import { toast } from 'react-toastify';

// Import de Estilos
import "./login.css"
import Footer from '../../layout/footer-component/Footer';

function Login() {    

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit", {email, password})
  }
  
  return (  
  <section>  
    <Tooltip id="exit-Tooltip" className='Tooltip'/>

    <div className='Exit-Div'>
    <Link to= "/">
      <button data-tooltip-content='Deseja Retornar?' data-tooltip-place='right' data-tooltip-id='exit-Tooltip' className='Exit-Button'>
        <i class="bi bi-box-arrow-left" a/>
      </button>        
    </Link>
    </div>

    <div className='loginDiv'>      
      <h2> Área de Login </h2>     
      <h5> Digite seus Dados </h5>
      <form onSubmit={handleSubmit} >
        <div className='inputDiv'>
          <div className='formItem'>
        <label className='inputText'> Email: </label> 
        <input 
            type="email" 
            name="Email"         
            placeholder="Digite seu Email"             
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required            
            />            
          </div>                     

          <div className='formItem'>
        <label className='inputText'> Senha: </label> 
        <input 
            type="password" 
            name="Senha"         
            placeholder="Digite sua Senha" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />         
          </div>
        </div>
             

          <div className='subDiv'>
            <button value="Enviar" id="enviarDados"> Enviar Dados ✔ </button>
            <button type="reset" value="Apagar" id="resetarDados"> Resetar ❌ </button>
          </div>

          <div className='endDiv' hidden > 
            <span> Credenciais Inválidas </span>
            <span> Email ou Senha <b>Incorretos</b> </span>
          </div>

      </form>
    </div>

    <Footer />
  </section>
    
  )
}

export default Login