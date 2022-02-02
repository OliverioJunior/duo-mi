import React,{useState,useEffect} from 'react'
import "./FotoEmily.css"



function FotoEmily() {
    const [click,setClick] = useState(true);
     const Virar = (e)=>{
        setClick(!click)
    
      
      /* if(!click){

          e.target.style.transform = "rotateY(180deg)"
         

      } else {
        e.target.style.transform = "rotateY(0deg)"
      } */
        
    } 
      window.addEventListener('resize',(e)=>{
        console.log(e.target)
    }) 
    return (
        <>
                <div className={click ? "girar":"girando"} onClick={Virar}>
                    <div className="Emily">
                        <div className="adesivo" />
                        <div className="balao" />
                        <div className="seta_curva" />
                    </div>
                    <div className='fundo'/>
                </div>
        </>
    )
}

export default FotoEmily;
