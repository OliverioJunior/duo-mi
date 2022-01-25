import React,{useState} from 'react'
import "./FotoEmily.css"



function FotoEmily() {
    const [click,setClick] = useState(false);
     const virar = (e)=>{
        setClick(!click)
    } 
   /*  window.addEventListener('resize',(e)=>{
        if(click){
            e.target.style.transform = " scaleX(-1)"
            e.target.parentElement.childNodes[2].style.background = " red" 
           console.log(e.target.parentElement.childNodes[2])
           console.log(console.log(click))
        } else {
            e.target.parentElement.childNodes[2].style.background = "#4D0C5C"
            e.target.style.transform = " scaleX(1)"
           
        }
    }) */
    return (
        <>
            
                <div className="Emily"
                onClick={virar}>
                    <div className="adesivo" />
                    <div className="balao" />
                    <div className="seta_curva" />
                </div>
                <div className='fundo'/>
        </>
    )
}

export default FotoEmily;
