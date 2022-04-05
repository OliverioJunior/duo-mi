/* eslint-disable react/jsx-pascal-case */
import React,{useState, useEffect, useRef, useLayoutEffect} from 'react';
import './BackGround.css';
import { Tela_01, Tela_02, Tela_03, Tela_07, Tela_09 } from './telas/index.js';
import Tela_05 from './telas/meio/Tela-05';
import Globais from './Globais';
/* import ContentLoader,{Facebook} from 'react-content-loader'; */

function BackGround() {
    const body = document.querySelector('body');
    const [show, setShow] = useState(false);
    const quadradoRef = useRef(null);
    const loadRef = useRef(null);
    const mouse = {
        x: 0,
        y: 0,
        mouseMove: false,
        savePosition: {
            x: 0,
            y: 0
        }
    };

        useLayoutEffect(() => {
          
          window.addEventListener('load', () => {
              window.scrollTo({ top: Globais.loadTop, left: Globais.loadLeft, behavior: 'smooth' })
           })
           console.log(loadRef.current);
            function disable () {
                loadRef.current.style.display = 'none';
            }
            function opacity () {
                let opacity = 0;
                loadRef.current.style.opacity = opacity;
            }
            setTimeout(opacity, 3000);
            setTimeout(disable, 3000);
        }) 
         function buttonScroll(){
            window.scrollTo({ top: Globais.loadTop, left: Globais.loadLeft, behavior: 'smooth' })
        }

         window.addEventListener('mousedown', (e) => {
            if (Globais.setDrawing === false) {
                Globais.resRight = window.scrollX;
                Globais.resTop = window.scrollY;
                mouse.x = e.clientX;
                mouse.y = e.clientY;
                mouse.mouseMove = true;
                body.style.cursor = 'grabbing';
            }
           
        })
        window.addEventListener('mouseup', (e) => {
            if (Globais.setDrawing === false) {
                mouse.mouseMove = false;
                mouse.savePosition.x = window.scrollX;
                mouse.savePosition.y = window.scrollY;
                body.style.cursor = 'grab';
            }
          
        })
        
        window.addEventListener('mousemove', (e) => {
            //to take the mouse position
            //prevent mouse comportament 
            
            e.preventDefault();
            if(Globais.setDrawing){
                return
            }
            if (mouse.mouseMove && Globais.setDrawing === false) {
                const x = e.clientX - mouse.x;
                const y = e.clientY - mouse.y;
                window.scrollTo(Globais.resRight - x, Globais.resTop - y, { behavior: 'smooth' });
            }
        })
      
        return (
            <>
                <div className='back-ground'>
                    <div ref={loadRef} className='screenload'>
                        <div className='screenload-container'/>
                        <div className='c-loader'/>
                            
                        
                    </div>
                    <div ref={quadradoRef}className= {show ? "quadradoNone" : "quadrado"}  onClick={buttonScroll} >
                        
                    </div>
                    <Tela_01 />
                    <div className="cantoMeioEsquerdo" />
                    <Tela_07 />
                    <Tela_02 />
                    <Tela_05 className='firstLoad' />
                    <div className="meioInferior">
                    </div>
                    <Tela_03 />
                    <div className="cantoMeioDireito">
                    </div>
                    <Tela_09 />
                </div>
            </>
               


           
        )
    }

    export default BackGround;
