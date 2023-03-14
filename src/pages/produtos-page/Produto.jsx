import React, { useEffect, useState } from 'react'

//Import dos Estilos
import './produtos.css'


function Produto() {

    // Buscar na Api Informações
    const [data, setData] = useState([]);
    const local = "http://26.79.95.70:1337"

    useEffect(() => {                            
        fetch('http://26.79.95.70:1337/api/produtos:?populate=*')
        .then((response) => response.json())
        .then(setData);
    }, []);


  return (
    <div>        
        {data.data?.map((item, id ) => {      
        return(     
                <div className="item" key={id}>
                    <div className='image'> 
                        <img src={local + item.attributes.imagem.data.attributes.url }  />
                    </div>
                    <div className='info'>
                        <span className='name'>{item.attributes.titulo}</span> 
                        <span className="categoria">({item.attributes.Categoria})</span>                         
                        <span className="sobre"> {item.attributes.Sobre}</span>
                        <span className='price'>R$ {item.attributes.valor}</span>                                
                </div>
            </div>
        )
        })}
    </div>
  )
}

export default Produto
