import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button.js';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button,setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth<=960){
            setButton(false)
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton);
    window.addEventListener('click',()=>{
        const menu = document.querySelectorAll('.nav-menu a')
        menu.forEach(i=>{
            i.addEventListener('click',(e)=>{
                e.preventDefault()
                const element = e.target;
                const id = element.getAttribute('href');
                const to = document.querySelector(id).offsetTop;
                console.log(id)
                window.scrollTo({
                    top: id,
                    left:id,
                    behavior:'smooth'
                })
            })
        })
    })
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

export default Navbar
