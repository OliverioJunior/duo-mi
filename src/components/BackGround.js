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
    
    const mouse = {
        ativo: false,
        movendo: false,
        pos: {x:0, 
              y:0},
        posAnterior: {x:0, 
            y:0},
    }

    
    window.addEventListener("mousedown", (e) => {mouse.ativo = true
    mouse.posAnterior.x = e.clientX
    mouse.posAnterior.y = e.clientY
    })
    window.addEventListener("mouseup", () => mouse.ativo = false)
    window.addEventListener("mousemove", (e)=>{
        mouse.pos.x = mouse.posAnterior.x - e.clientX;
        mouse.pos.y = mouse.posAnterior.y - e.clientY;
        mouse.movendo = true;
        console.log(mouse.pos.x)
    })
    const moverTela = ()=>{
        window.scrollTo({
            top: mouse.pos.x,
            left: mouse.pos.y,
            behavior: "smooth"
        })
    }
    const ciclo = ()=>{
        if(mouse.ativo && mouse.movendo && mouse.posAnterior){
            moverTela({pos:mouse.pos, posAnterior:mouse.posAnterior})
            mouse.movendo = false;
        }
        mouse.posAnterior = {x: mouse.pos.x, y: mouse.pos.y}
        setTimeout(ciclo, 10);
    }
    window.addEventListener("mousedown", ciclo())








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
