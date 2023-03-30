import React, { useEffect, useState } from 'react'

import Produto from "./Produto";


// Import dos Estilos
import './produtos.css'


function Produtos(){       

    // Buscar na Api Informações
    const [data, setData] = useState([]);
    const [progress, setProgress] = useState(0)
    
    const local = "http://26.79.95.70:1337"

    useEffect(() => {                            
        fetch('http://26.79.95.70:1337/api/produtos?populate=*')
        .then((response) => response.json())
        .then(setData);
    }, []);


    return(
    <section id="Produtos">        
            <div className='container'>
                <div className='carousel'>                 
            {data.data?.map((item, id ) => {      
            return(     
                <div className="item" key={id}>
                    <div className='image'> 
                        <img src={local + item.attributes.imagem.data.attributes.url }  />
                    </div>
                    <div className='info'>
                        <span className='name'>{item.attributes.titulo}</span> 
                        <span className="categoria">({item.attributes.Categoria})</span> 
                        <button id="modalBtn"> Saiba mais </button>                         
                        <span className='price'>R$ {item.attributes.valor}</span>                                
                </div>
            </div>
            )
            })}                    
                </div>
        </div>                                   
    </section>
    )
}

export default Produtos