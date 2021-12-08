import React, {useState} from "react";
import "./Tela-01.css"

const entidade = document.querySelector(".Emily")
const letraE = document.querySelector(".emilyE")
const _modal = document.querySelector('.modal')

const [modal, setModal] = useState()
modal = _modal.style.display
entidade.addEventListener( "click", ()=>{
    modal = "block"
    console.log('clicou')
})
window.onload = () =>{
    
    entidade.addEventListener( "mouseover", ()=>{
        entidade.style.width = (entidade.clientWidth + 1) + "px"; 
        entidade.style.height = (entidade.clientHeight + 1) + "px"; 
    })
    
    entidade.addEventListener( "mouseout", ()=>{
        entidade.style.width = (entidade.clientWidth -1 ) + "px"; 
        entidade.style.height = (entidade.clientHeight - 1) + "px"; 
    })
}
window.addEventListener('click',(e)=>{
    if(e.target.className === "modal"){
       setModal = "none"
    }
})
    

        
        
    
const Tela_01 = () => {
    return (

        <div className='cantoSuperiorEsquerdo'>

            <div className="Emily">

            </div>
            <div className="modal"/>
            <div className="emilyNome">
                <div className="emilyE" >

                </div>
                <div className="emilyM" >

                </div>
                <div className="emilyI" >

                </div>
                <div className="emilyL" >

                </div>
                <div className="emilyY" >

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

