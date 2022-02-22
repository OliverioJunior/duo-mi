import React from "react";
import "./Tela-07.css"

function Tela_07(props) {

    return (
        <div className="cantoInferiorEsquerdo">
            <div className='giz' />
            <canvas className='desenhoArea' >
            </canvas>
            <div className='selecionarCores'>
                <button className='vermelho'>

                </button>
                <button className='amarelo'>

                </button>
                <button className='verde'>

                </button>
                <button className='azul'>

                </button>
                <button className='roxo'>

                </button>
                <button className='salvarDesenho'>

                </button>
            </div>
        </div>
    )
}

export default Tela_07;