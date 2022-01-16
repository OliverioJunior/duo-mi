import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button.js';
import Tela_01 from './telas/cantoSuperiorEsquerdo/Tela-01.js';
import Tela_07 from './telas/cantoInferiorEsquerdo/Tela-07.js';
import Tela_05 from './telas/meio/Tela-05.js';
import Tela_03 from './telas/cantoSuperiorDireito/Tela-03.js';
import './BackGround.css'
import Tela_09 from './telas/cantoInferiorDireito/Tela-09.js';


function BackGround() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    let intervalId = 0
    window.addEventListener('mousedown', function(e){
         intervalId = setInterval(hold,5) 
        function hold(){
            setClick(true)
            if(setClick){
                window.scrollTo(e.clientX , e.clientY)
                console.log(e.clientY)
            }
        }
        
    }) 
    window.addEventListener('mouseup', release)
    
   function release(){
        if(intervalId != 0){
            clearInterval(intervalId)
            intervalId = 0;
            setClick(false)
            console.log("Soltou!")
        }
    }
     

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

                <Tela_01/>
                <div className="cantoMeioEsquerdo"/>
                <Tela_07/>
                <div className="meioSuperior">
                </div>

                <Tela_05/>



                <div className="meioInferior">

                </div>
                <Tela_03/>
                <div className="cantoMeioDireito">

                </div>
                <Tela_09/>
            </div>


        </>
    )
}

export default BackGround 
