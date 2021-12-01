import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button.js';
import Tela_01 from './telas/cantoSuperiorEsquerdo/Tela-01.js';
import Tela_07 from './telas/cantoInferiorEsquerdo/Tela-07.js';
import Tela_05 from './telas/meio/Tela-05.js';
import './BackGround.css'
import Navbar from './Navbar'

function BackGround() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    /* window.addEventListener('click', (e) => {
        const offsetX = e.offsetX
        const offsetY = e.offsetY
        console.log(offsetX, offsetY)
        window.scroll({
            top: offsetX,
            left: offsetY,
            behavior: 'smooth'
        });

    }) */

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>

            <div className='back-ground'>

                <Tela_01 />
                <div className="cantoMeioEsquerdo">

                </div>
                <Tela_07 />
                <div className="meioSuperior">
                </div>
                
                    <Tela_05 />

               

                <div className="meioInferior">

                </div>
                <div className="cantoSuperiorDireito">

                </div>
                <div className="cantoMeioDireito">

                </div>
                <div className="cantoInferiorDireito">

                </div>
            </div>


        </>
    )
}

export default BackGround 
