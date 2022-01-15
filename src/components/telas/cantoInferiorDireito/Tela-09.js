import React from 'react'
import "./Tela-09.css"


function Tela_09() {
    return (
        
        <div className='cantoInferiorDireito'>
            <div className='tvSemColapsar'>
                <div className='plantaVerdeTv'/>
                <div className='plantaRosaTv'/>
                <div className='televisor'>
                    <span className='fraseTv'> clique na <span className='filhaTv'>tv</span> para acessar a
                    <span className="fraseFilha"> galeria de jobs</span></span>
                    <div className='botaoPlay'/>
                    <div className='cursor'/>
                </div>   
            </div>
        </div>
        
    )
}
export default Tela_09;