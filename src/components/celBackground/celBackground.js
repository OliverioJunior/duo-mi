import React from 'react'
import "./celBackground.css";
import { QuemSomos, RedesSociais, Meio, Formulario, Criatividade, Portfolio } from '../telas/index.js';
import FotoEmily from "../telas/QuemSomos/fotoEmily/FotoEmily";
import EmilyNome from "../telas/QuemSomos/emilyNome/EmilyNome";
import Texto from "../telas/QuemSomos/texto/Texto";
import FotoDupla from "../telas/QuemSomos/fotoDupla/FotoDupla";
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
            <Texto/>
          </div>   
       </div>
       <div className ='containerDuplaTamis'>
            <FotoDupla/>
       </div>
     </div>
    </div>
  )
}
