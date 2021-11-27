import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button.js';
import './BackGround.css'
import Navbar from './Navbar'

function BackGround() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    window.addEventListener('click', (e) => {
        const offsetX = e.offsetX
        const offsetY = e.offsetY
        console.log(offsetX, offsetY)
        window.scroll({
            top: offsetX,
            left: offsetY,
            behavior: 'smooth'
        });

    })

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

                <div className='cantoSuperiorEsquerdo'>
                    <div className="Emily">

                    </div>
                    <div className="emilyNome">
                        <div className="emilyE">

                        </div>
                        <div className="emilyM">

                        </div>
                        <div className="emilyI">

                        </div>
                        <div className="emilyL">

                        </div>
                        <div className="emilyY">

                        </div>
                    </div>
                    <div className='fotoDupla'>

                    </div>
                    <div className='imagemTexto'>

                    </div>
                    <div className='tamis'>

                    </div>
                    <div className='tamisNome'>
                        <div className='tamisT'>

                        </div>
                        <div className='tamisA' >

                        </div>
                        <div className='tamisM'>

                        </div>
                        <div className='tamisI'>

                        </div>
                        <div className='tamisS'>

                        </div>
                    </div>
                </div>
                <div className = "cantoMeioEsquerdo">
                    
                </div>
                <div className = "cantoInferiorEsquerdo">
                    <div className = 'desenhoArea'>
                        
                    </div>
                    <div className = 'selecionarCores'>
                        <button className='vermelho'>

                        </button>
                        <button className='amarelo'>

                        </button>
                        <button className ='verde'>

                        </button>
                        <button className='azul'>

                        </button>
                        <button className='roxo'>

                        </button>
                            <button className='salvarDesenho'>

                            </button>
                    </div>
                </div>
                <div className = "meioSuperior">
                    
                </div>
                <div className = "meio">
                    
                </div>
                <div className = "meioInferior">
                    
                </div>
                <div className = "cantoSuperiorDireito">
                    
                </div>
                <div className = "cantoMeioDireito">
                    
                </div>
                <div className = "cantoInferiorDireito">
                    
                </div>
            </div>


        </>
    )
}

export default BackGround 
