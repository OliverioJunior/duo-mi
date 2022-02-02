import React, { useState } from 'react';
import "./FotoTamis.css";

function FotoTamis() {
    const [click,setClick] = useState(true);
    const girar = () => {
        setClick(!click)
    }
  return (
    <div className = {click ? "tamisFrente" : "tamisFundo"}
    onClick={girar}>
        <div className='tamis'>
            <div className="tamiSeta" />
        </div>
        <div className="tamisDescricao"/>
    </div>
  );
};

export default FotoTamis
