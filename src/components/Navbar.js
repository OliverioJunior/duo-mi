import React, { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import Globais from './Globais'

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
    const [click, setClick] = useState(false);
    
    const closeMobileMenu = () => setClick(false);
    /* const [animation, setAnimation] = useState(false); */
    const animaRef = useRef(null);
    
    useEffect(() => {
        const element = animaRef.current;
       /*  element.addEventListener('mousemove',() => {
            setAnimation(true);
            let deg = 45;
             deg = deg + 1;
            element.style.background = `linear-gradient(${deg}deg,#4D0C5C,#B71B43,#FAAC10)`;
            console.log(deg); */
         
       
       
    },)
   
    
    return (
        <>
            <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'></link>
            <nav  className='navbar'>
                <div ref={animaRef} className='navbar-container'>
                    <ul className='nav-menu'>
                        <li className='nav-item' >
                            <a href='#quemsomos' className='nav-links' onClick={closeMobileMenu}>
                                Quem somos  
                            </a>
                        </li>
                        <li className='nav-item' >
                            <a href='#jobs' className='nav-links' onClick={closeMobileMenu}>
                                Nossos Jobs 
                            </a>
                        </li>
                        <li className='nav-item' >
                            <a href='#atendimento' className='nav-links' onClick={closeMobileMenu}>
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
