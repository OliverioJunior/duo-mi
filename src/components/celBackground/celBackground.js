import React from 'react'
import "./celBackground.css";
import { QuemSomos, RedesSociais, Meio, Formulario, Criatividade, Portfolio } from '../telas/index.js';
export default function celBackground() {
  return (
    <div className='celBackground'>
      <div className='container-meio'>
        <Meio/>
      </div>
     <QuemSomos/>
    
    </div>
  )
}
