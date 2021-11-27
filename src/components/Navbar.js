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

    return (
        <> 
        <nav className='navbar'>
            <div className='navbar-container'>
               
                <div onClick={handleClick} className='menu-icon' >
                    <i className={click ? 'fas fa-times' : 'fas fa-paper-plane'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item' >
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item' >
                        <Link to='/soul' className='nav-links' onClick={closeMobileMenu}>
                            Quem somos
                        </Link>
                    </li>
                    <li className='nav-item' >
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                           Entre em contato
                        </Link>
                    </li>
                    <li className='nav-item' >
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                           Nossos Serviços
                        </Link>
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
