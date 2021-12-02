import React, {useState} from "react";
import "./Tela-01.css"
 

window.onload = () =>{
    const entidade = document.querySelector(".Emily")
    const corpo = document.querySelector("body")
    const letraE = document.querySelector(".emilyE")
    let fator_lupa = 1.2

    entidade.addEventListener( "mouseover", ()=>{
         entidade.style.width = (entidade.clientWidth + 2) + "px"; 
         entidade.style.height = (entidade.clientHeight + 2) + "px"; 
        
    })
    entidade.addEventListener( "mouseout", ()=>{
         entidade.style.width = (entidade.clientWidth -2 ) + "px"; 
         entidade.style.height = (entidade.clientHeight - 2) + "px"; 
        
    })
    letraE.addEventListener( "click", (e)=>{
        console.log(onDragStart(e))
        
    })
}
function onDragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    e.currentTarget.style.backgroundColor = 'yellow';
}
const Tela_01 = () => {
    return (

        <div className='cantoSuperiorEsquerdo'>

            <div className="Emily">

            </div>
            <div className="emilyNome">
                <div className="emilyE" draggable= "true">

                </div>
                <div className="emilyM" draggable= "true">

                </div>
                <div className="emilyI" draggable= "true">

                </div>
                <div className="emilyL" draggable= "true">

                </div>
                <div className="emilyY" draggable= "true">

                </div>
            </div>
            <div className='fotoDupla'>

            </div>
            <div className='imagemTexto'>

            </div>
            <div className='tamis'>

            </div>
            <div className='tamisNome'>
                <div className='tamisT'>

                </div>
                <div className='tamisA' >

                </div>
                <div className='tamisM'>

                </div>
                <div className='tamisI'>

                </div>
                <div className='tamisS'>

                </div>
            </div>
        </div>

    )
}

export default Tela_01

