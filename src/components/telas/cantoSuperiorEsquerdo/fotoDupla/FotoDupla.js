import React,{useState,useEffect} from 'react'
import "./FotoDupla.css"



function FotoDupla() {
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
           <div className='fotoDupla' />
        </>
    )
}

export default FotoDupla;