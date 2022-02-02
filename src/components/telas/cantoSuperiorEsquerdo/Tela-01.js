import React, { useState } from "react";
import FotoEmily from "./fotoEmily/FotoEmily";
import FotoTamis from "./fotoTamis/FotoTamis";
import "./Tela-01.css"

const Tela_01 = () => {

    


    return (

        <div className='cantoSuperiorEsquerdo'>
            <div className=" Estatico  grid">
                <FotoEmily/>
                <div className="emilyNome">
                    <div className="emilyE" />
                    <div className="emilyM" />
                    <div className="emilyI" />
                    <div className="emilyL" />
                    <div className="emilyY" />
                </div>
                <div className='Texto' >
                    <h1>Clique na <span>imagem</span> para conhecer essa <span>dupla</span></h1>
                </div>
                <div className='fotoDupla' />
                <FotoTamis/>
                <div className='tamisNome'>
                    <div className='tamisT' />
                    <div className='tamisA' />
                    <div className='tamisM' />
                    <div className='tamisI' />
                    <div className='tamisS' />
                </div>
            </div>
        </div>
    )
}

export default Tela_01

