import React from "react";
import FotoDupla from "./fotoDupla/FotoDupla";
import FotoEmily from "./fotoEmily/FotoEmily";
import FotoTamis from "./fotoTamis/FotoTamis";
import EmilyNome from "./emilyNome/EmilyNome";
import "./QuemSomos.css"
import "./responsive.css"
const QuemSomos = () => {
     return (
        <div className='cantoSuperiorEsquerdo'>
            <div id="quemsomos"  className=" Estatico  grid">
                <FotoEmily/>
                <EmilyNome/>
                <div className='Texto' >
                    <h1>Clique na <span>imagem</span> para conhecer essa <span>dupla</span></h1>
                </div>
                <FotoDupla/>
                <FotoTamis/>
             </div>
        </div>
    )
}

export default QuemSomos;

