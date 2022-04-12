import React, { useRef } from 'react'
import './Navbar.css'
import Globais from '../Globais'
import "./responsive.css"

window.addEventListener('click', () => {
    const menu = document.querySelectorAll('.nav-menu a')
    menu.forEach(i => {
        i.addEventListener('click', (e) => {
            e.preventDefault()
            const element = e.target;
            const id = element.getAttribute('href');
            const Top = document.querySelector(id).offsetTop;
            const Left = document.querySelector(id).offsetLeft;
            Globais.resLeft = Left
            Globais.resTop = Top
            Globais.setTela = true;
            window.scrollTo({   
                top: Globais.resTop,
                left: Globais.resLeft,
                behavior: 'smooth'
            })
            
        })
    })
})


function Navbar() {
  
    const animaRef = useRef(null);
    return (
        <>
            <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'></link>
            <nav  className='navbar'>
                <div ref={animaRef} className='navbar-container'>
                    <ul className='nav-menu'>
                        <li className='nav-item' >
                            <a href='#quemsomos' className='nav-links'>
                                Quem somos  
                            </a>
                        </li>
                        <li className='nav-item' >
                            <a href='#jobs' className='nav-links'>
                                Nossos Jobs 
                            </a>
                        </li>
                        <li className='nav-item' >
                            <a href='#atendimento' className='nav-links'>
                                Atendimento Online
                            </a>
                        </li>

                    </ul>
                 </div>
            </nav>
        </>
    )
}

export {Navbar};
