import React from 'react'
import "./celBackground.css";
import { QuemSomos, RedesSociais, Meio, Formulario, Criatividade, Portfolio } from '../telas/index.js';
import FotoEmily from "../telas/QuemSomos/fotoEmily/FotoEmily";
import EmilyNome from "../telas/QuemSomos/emilyNome/EmilyNome";
export default function celBackground() {
  return (
    <div className='celBackground'>
      <div className='container-meio'>
        <Meio/>
      </div>
     <div className='container-quemsomos'>
       <div className='containerNomeFoto'>
          <FotoEmily/>
          <div className='containerNomeEmily'>
            <EmilyNome/>
          </div>   
       </div>
     </div>
    </div>
  )
}
