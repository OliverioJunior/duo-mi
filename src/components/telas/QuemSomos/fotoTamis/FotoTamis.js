import React, { useState } from 'react';
import "./FotoTamis.css";
import NomeTamis from './nomeTamis/NomeTamis';
function FotoTamis() {
    const [click, setClick] = useState(true);
    const girar = (e) => {
        setClick(!click)
        let flip = document.querySelector(".containerTamis")
        if (click) {
            flip.style.transform = "rotate(-2deg) rotateY(180deg)"
        } else {
            flip.style.transform = "rotate(-2deg) rotateY(0deg)"
        }
    }
    return (
        <>
            <div className="containerTamis"
                onClick={girar}>
                <div className='tamis'>
                    <div className="tamiSeta" />
                </div>
                <div className="tamisDescricao" />
            </div>
            <NomeTamis/>         
        </>
    );
};

export default FotoTamis
