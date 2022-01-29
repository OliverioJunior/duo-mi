import React,{useState,useEffect} from 'react'
import "./FotoEmily.css"



function FotoEmily() {
    const [click,setClick] = useState(false);
     const Virar = (e)=>{
        setClick(!click)
    
       console.log(document)
        
    } 
      window.addEventListener('resize',(e)=>{
        console.log(e.target)
    }) 
    return (
        <>
            
                <div className="Emily"
                onClick={Virar}>
                    <div className="adesivo" />
                    <div className="balao" />
                    <div className="seta_curva" />
                </div>
                <div className='fundo'/>
        </>
    )
}

export default FotoEmily;
