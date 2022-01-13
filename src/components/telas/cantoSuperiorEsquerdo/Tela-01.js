import React, { useState } from "react";
import FotoEmily from "./fotoEmily/FotoEmily";
import "./Tela-01.css"

const Tela_01 = () => {

    window.addEventListener = ("resize", (e) => {
        console.log(window.screen)
    })





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
                <div className='imagemTexto' />
                <div className='fotoDupla' />
                <div className='tamis'>
                    <div className="adesivo01" />
                    <div className="adesivo02" />
                    <div className="tamiSeta" />
                </div>
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

