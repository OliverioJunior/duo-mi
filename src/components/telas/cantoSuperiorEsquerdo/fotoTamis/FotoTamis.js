import React, { useState } from 'react';
import "./FotoTamis.css";

function FotoTamis() {
    const [click,setClick] = useState(true);
    const girar = (e) => {
        setClick(!click)
        if(!click){
            e.target.style.transform = "rotateY(180deg)"
        } else {
            e.target.style.transform = "rotateY(0deg)"
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
