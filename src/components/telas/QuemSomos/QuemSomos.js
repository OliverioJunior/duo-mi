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
                <div className="orkut">
                <div className='cantoMeioEsquerdoDivDiv'>
                                <div className='divStart'>
                                </div>
                                <div className='divSmile'>
                                </div>
                                <div className='divCubs'>
                                </div>
                                <div className='divHeart'>
                                </div>
                            </div>
                </div>
            </div>

        </div>
    )
}

export default QuemSomos;

/*     <div className='cantoMeioEsquerdoDiv'>
                           
                </div>*/