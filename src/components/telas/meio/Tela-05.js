import React,{useRef, useLayoutEffect} from "react"
import "./Tela-05.css"
import { Navbar } from "../../Navbar"
import Globais from "../../Globais";

export default  function Tela_05(props){
  const firstRef = useRef();
  useLayoutEffect(() => {
    const element = firstRef.current;
    Globais.loadTop = element.offsetTop;
    Globais.loadLeft = element.offsetLeft;
  })
  return (
    <div ref={firstRef} className="meio">
      <div className="fotoPrincipal" />
      <Navbar className='navBarra' />
    </div>
  )
}


