import React, { useState} from 'react'
import "./FotoEmily.css"



function FotoEmily() {
  const [click, setClick] = useState(true);
  const Virar = () => {
    setClick(!click)
    let flip = document.querySelector('.emilyContainer')
    if (click) {
      flip.style.transform = "rotate(-2deg) rotateY(180deg)"
    } else {
      flip.style.transform = "rotate(-2deg) rotateY(0deg)"
    }
  }
 /*  window.addEventListener('resize', (e) => {
    console.log(e.target)
  }) */
  return (
    <>
      <div className="emilyContainer" onClick={Virar}>
        <div className="Emily">
          <div className="adesivo" />
          <div className="balao" />
          <div className="seta_curva" />
        </div>
        <div className='fundoEmily' />
      </div>
    </>
  )
}

export default FotoEmily;
