import React,{useState,useEffect} from 'react'
import "./FotoDupla.css"



function FotoDupla() {
    const [click,setClick] = useState(true);
     const Virar = (e)=>{
        setClick(!click)
        let flip = document.querySelector(".containerDupla")
        if(click){
            flip.style.transform = "rotate(-6deg) translate(0px, -20px) rotateY(180deg)"
        } else {
            flip.style.transform = "rotate(-6deg) translate(0px, -20px) rotateY(0deg)"
        }
        
    } 
      window.addEventListener('resize',(e)=>{
        console.log(e.target)
    }) 
    return (

            <div className='containerDupla' onClick={Virar}>
            <div className='fotoDupla'>
             <div className= 'fotoDuplaCursor'/>
            </div>           
            <div className='fundoDupla'/>

            </div>
        
    )
}

export default FotoDupla;