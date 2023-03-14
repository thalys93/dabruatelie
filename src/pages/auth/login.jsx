import React from 'react'
import "./login.css"

function Login() {
  const localPost = "http://26.79.95.70:1337"


  return (  

    <div id="loginDiv">      
      <h2> Acessar o Painel </h2>      
      <form method="post" action={localPost}>
          <div id="inputDiv">
        <p> Email: <input type="email" name="email" id="emailInput" placeholder="Digite seu Email" required/> </p>     
        <p>Senha: <input type="password" name="passworld" id="passInput" placeholder="Digite sua Senha" required/> </p>        
          </div>

          <div id="subDiv">
        <input type="submit" value="Enviar" id="enviarDados"/>        
        <input type="reset" value="Apagar" id="resetarDados"/>
          </div>
      </form>


    </div>
    
  )
}

export default Login