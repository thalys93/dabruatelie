
import React, { useEffect, useState } from "react";
import './produtos.css'


function Produtos(){       


    const [data, setData] = useState([]);    
    const local = "http://localhost:1337"
    const localVpn = "http://26.79.95.70:1337"

    useEffect(() => {
    // Comentar a porta que Não deseja utilizar
        // Localhost
        // fetch('http://localhost:1337/api/produtos?populate=*')
        // VPN
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
                            <img src={localVpn + item.attributes.imagem.data.attributes.url }  />
                        </div>
                            <div className='info'>
                                <span className='name'>{item.attributes.titulo}</span> 
                                <span className="categoria">({item.attributes.Categoria})</span> 
                                <button id="modalBtn"> Saiba mais </button> 
                                
                                {/* <span className="sobre"> {item.attributes.Sobre}</span> */}
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