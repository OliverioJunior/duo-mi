import React,{useRef, useLayoutEffect} from "react"
import "./Meio.css"
import { Navbar } from "../../navbar/Navbar"
import Globais from "../../Globais";
import "./responsive.css"
export default  function Meio(props){
  const firstRef = useRef();
  useLayoutEffect(() => {
    const element = firstRef.current;
    Globais.loadTop = element.offsetTop;
    Globais.loadLeft = element.offsetLeft;
  })
  return (
    <div ref={firstRef} className="meio">
      <div className="centerMeio">
        <div className="fotoPrincipal" />
        <Navbar className='navBarra' />
      </div>
    </div>
  )
}


