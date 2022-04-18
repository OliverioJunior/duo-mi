import React,{useRef, useLayoutEffect, useContext} from "react"
import "./Meio.css"
import { Navbar } from "../../navbar/Navbar"
import { ScrollMenu } from '../../../context/ScrollMenu'
import "./responsive.css"
export default  function Meio(props){
  const firstRef = useRef();
  const {loadTop, setLoadTop} = useContext(ScrollMenu);
  const {loadLeft, setLoadLeft} = useContext(ScrollMenu);
  useLayoutEffect(() => {
    const element = firstRef.current;
    setLoadTop(element.offsetTop);
    setLoadLeft(element.offsetLeft);
    console.log(loadTop,loadLeft)
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


