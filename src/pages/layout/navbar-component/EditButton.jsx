import React from 'react'
// Import de Estilos
import "./navbar.css"

function EditButton(props) {
    
    function mostrarDados(){        
        props.onClickCapture();
    }

  return (
    <button className="sairSessao" id="divBtn1" onClick={mostrarDados}> Edição </button>
  )
}

export default EditButton