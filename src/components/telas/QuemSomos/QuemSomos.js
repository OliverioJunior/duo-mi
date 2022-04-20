import React from "react";
import FotoDupla from "./fotoDupla/FotoDupla";
import FotoEmily from "./fotoEmily/FotoEmily";
import FotoTamis from "./fotoTamis/FotoTamis";
import EmilyNome from "./emilyNome/EmilyNome";
import Texto from "./texto/Texto";
import "./QuemSomos.css"
import "./responsive.css"
const QuemSomos = () => {
     return (
        <div className='cantoSuperiorEsquerdo'>
            <div id="quemsomos"  className=" Estatico  grid">
                <FotoEmily/>
                <EmilyNome/>
                <Texto/>
                <FotoDupla/>
                <FotoTamis/>
             </div>
        </div>
    )
}

export default QuemSomos;

