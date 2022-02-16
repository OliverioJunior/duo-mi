import React, { useState } from 'react';
import "./FotoTamis.css";

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
            <div className='tamisNome'>
                <div className='tamisT' />
                <div className='tamisA' />
                <div className='tamisM' />
                <div className='tamisI' />
                <div className='tamisS' />
            </div>
        </>
    );
};

export default FotoTamis
