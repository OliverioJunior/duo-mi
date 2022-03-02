import React, { useState } from 'react'
import './Navbar.css'

let resTop = 0
let resLeft = 0
let setTela = false;
window.addEventListener('click', () => {
    const menu = document.querySelectorAll('.nav-menu a')
    menu.forEach(i => {
        i.addEventListener('click', (e) => {
            e.preventDefault()
            const element = e.target;
            const id = element.getAttribute('href');
            const Top = document.querySelector(id).offsetTop;
            const Left = document.querySelector(id).offsetLeft;
            let resLeft = Left
            let resTop = Top
            window.scrollTo({
                top: resTop,
                left: resLeft,
                behavior: 'smooth'
            })
           setTela = true;
        })
    })
})
export {resLeft, setTela};
export {resTop};

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    /*    const showButton = () => {
           if(window.innerWidth<=960){
               setButton(false)
           } else {
               setButton(true)
           }
       }; */

    /* window.addEventListener('resize', showButton); */

    return (
        <>
            <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'></link>
            <nav className='navbar'>
                <div className='navbar-container'>

                    <div onClick={handleClick} className='menu-icon' >
                        <i className={click ? 'fas fa-times' : 'fas fa-paper-plane'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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

                    <div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export {Navbar};
