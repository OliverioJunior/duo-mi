import React from "react"
import "./Tela-05.css"
import { Navbar } from "../../Navbar"
import Globais from "../../Globais"





export default  function Tela_05(props){


  const menu = document.querySelectorAll('.meio')
  let res = 0
 menu.forEach((i) => {
    res = i
  })
  Globais.resLeft =  res.offsetLeft
  Globais.resTop = res.offsetTop

  window.addEventListener('load', ()=>{
    console.log('load')
  
    window.scrollTo(
        {top: Globais.resTop,
        left: Globais.resLeft,
        behavior: 'smooth'}
    )
}) 

  return (
    <div className="meio">
      <div className="fotoPrincipal" />
      <Navbar className='navBarra' />
    </div>
  )
}


