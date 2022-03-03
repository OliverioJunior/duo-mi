import React from "react"
import "./Tela-05.css"
import { Navbar } from "../../Navbar"
import Globais from "../../Globais"





const Tela_05 = (props) => {


  const menu = document.querySelectorAll('.meio')
  let res = 0
  menu.forEach((i) => {
    res = i
  })
  const res1 = res.offsetLeft
  console.log(res1)
  window.addEventListener('load', () => {
    console.log('carregou')
    window.scrollTo({
      top: res.offsetTop,
      left: res.offsetLeft,
      behavior: 'smooth'
    })
  })

  return (
    <div className="meio">
      <div className="fotoPrincipal" />
      <Navbar className='navBarra' />
    </div>
  )
}

export default Tela_05;
