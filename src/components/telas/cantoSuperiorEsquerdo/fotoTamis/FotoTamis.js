import React, { useState } from 'react';
import "./FotoTamis.css";

function FotoTamis() {
    const [click,setClick] = useState(true);
    const girar = (e) => {
        setClick(!click)
        let flip = document.querySelector(".tamisFrente")
        if(click){
            flip.style.transform = "rotate(-2deg) rotateY(180deg)"
        } else {
            flip.style.transform = "rotate(-2deg) rotateY(0deg)"
        }
    }
  return (
    <div className = "tamisFrente"
    onClick={girar}>
        <div className='tamis'>
            <div className="tamiSeta" />
        </div>
        <div className="tamisDescricao"/>
    </div>
  );
};

export default FotoTamis
