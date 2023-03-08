import './sobre.css'

let perfil = "/src/assets/img/logoinvertido_branco.png"

function Sobre(){
    return(        
            <section id="Sobre" className="animate__animated animate__fadeIn">
                <div id="Pessoa">
                    <img src={perfil} id="perfil" />
                    <span id="spanSobre"> Bruna Dutra </span>
                </div>

                <div id="Fundo">
                    <p id="txtEdit">Uma História Contando Sobre a Pessoa <br />
                       Sendo Emocionante e Interessante <br />
                       Explicando Motivos e Interesses
                    </p>
                </div>

                <div id="Fundo">
                    <p id="txtEdit">Exlicando a motivação para Começar o ateliê <br />
                       Há quanto tempo trabalha com Linhas <br />
                       Quando Começou o ateliê
                    </p>
                    
                </div>

                {/* <div id="test">
                    <form>
                        <input type="text" placeholder='Editar Texto 1'/>                                        
                        <hr />

                        <input type="text" placeholder='Editar Texto 2'/>                        
                        <hr />

                        <button type="submit">Salvar</button>

                        <button type="reset">Resetar</button>
                    </form>
                </div>                     */}
                
            </section>                    
    )
}

export default Sobre