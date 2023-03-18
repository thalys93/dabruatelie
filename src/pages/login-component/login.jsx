import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

// Import de Estilos
import "./login.css"

function Login() {    
  
  
  const [usuario, setUsuario] = useState ({ Email: "" , Senha: ""});   

  const handleChange = ({ target }) => {
    const { name, value} = target;
    setUsuario((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const Logar = async () => {
    try {
        const url = 'http://localhost:1337/api/dabru-users'
      if (usuario.data.attributes.Email && usuario.data.attributes.Senha) {
        const res = await axios.post(url, usuario)
        console.log(res);

      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      })
      
    }};

  return (  
    
    <div className='loginDiv'>      
      <h2> Área de Login </h2>     
      <h5> Digite seus Dados </h5>
      <form type="post" >
        <div className='inputDiv'>
          <div className='formItem'>
        <span className='inputText'> Email: </span> 
        <input 
        type="email" 
        name="Email"         
        onChange={handleChange}
        value={usuario.email}
        placeholder="Digite seu Email" 
        required/>            
          </div>                     

          <div className='formItem'>
        <span className='inputText'> Senha: </span> 
        <input 
        type="password" 
        name="Senha"         
        onChange={handleChange}
        value={usuario.password} 
        placeholder="Digite sua Senha" 
        required/>         
          </div>
             
        </div>

          <div className='subDiv'>
        <button onClick={Login} value="Enviar" id="enviarDados"> Enviar Dados ✔</button>
        <button type="reset" value="Apagar" id="resetarDados"> Resetar ❌ </button>
          </div>

          <div className='endDiv' hidden > 
            <span> Credenciais Inválidas </span>
            <span> Email ou Senha <b>Incorretos</b> </span>
          </div>
      </form>
    </div>
    
  )
}

export default Login