import React from 'react';
import "./Formulario.css";

function Formulario() {
   
    return (
        <div id='atendimento' className='cantoSuperiorDireito'>
            <div className='PcSemColapsar'>
                <h1>Acesse nosso <span>formulário</span> de atendimento online!</h1>
                <div className="fotoDeFundo">
                    <a  className = ' fotodefundolink'target ='_blank' rel="noreferrer"  href="https://docs.google.com/forms/d/e/1FAIpQLSdinWexp4OkzeHxAB7jMY6cDXFb0OiM9N8o7ApL1rXGgff-jQ/viewform">
                            <img className = 'linkFor'  alt=""/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Formulario;