/* eslint-disable react/jsx-pascal-case */
import React,{useState, useRef, useLayoutEffect} from 'react';
import './BackGround.css';
import './responsive.css';
import { QuemSomos, RedesSociais, Formulario, Criatividade, Portfolio } from '../telas/index.js';
import Tela_05 from '../telas/meio/Meio';
import Globais from '../Globais';
/* import ContentLoader,{Facebook} from 'react-content-loader'; */

function BackGround() {
    const body = document.querySelector('body');
    const [show, setShow] = useState(true);
    const quadradoRef = useRef(null);
    const loadRef = useRef(null);
    const focusRef = useRef(null);
    const mouse = {
        x: 0,
        y: 0,
        mouseMove: false,
        savePosition: {
            x: 0,
            y: 0
        }
    };
    let fineshLoad = useRef(false);

        useLayoutEffect(() => {
          
          window.addEventListener('load', () => {
              window.scrollTo({ top: Globais.loadTop, left: Globais.loadLeft, behavior: 'smooth' })
              fineshLoad.current = true;
              
           })
          
            function disable () {
                loadRef.current.style.display = 'none';
            }
            function opacity () {
                let opacity = 0;
                loadRef.current.style.opacity = opacity;
            }
            function endload(){
                if(fineshLoad){
                   setTimeout(opacity,3000) 
                   setTimeout(disable,3000) 
                  
                }
            }
            endload();
           
        }) 
         function buttonScroll(){
            window.scrollTo({ top: Globais.loadTop, left: Globais.loadLeft, behavior: 'smooth' })
            setShow(true);
        }
        
         window.addEventListener('mousedown', (e) => {
            e.preventDefault();
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
            e.preventDefault();
            if (Globais.setDrawing === false) {
                if(e.target.className === "meio"){
                    setShow(true)
                }else{
                    setShow(false)
                }
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
                setShow(true)
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
                        <h1>DuoMi</h1>
                    </div>
                    <QuemSomos />
                    <div className="cantoMeioEsquerdo" />
                    <Criatividade />
                    <RedesSociais />
                    <Tela_05 ref={focusRef}/>
                    <div className="meioInferior">
                    </div>
                    <Formulario />
                    <div className="cantoMeioDireito">
                    </div>
                    <Portfolio />
                </div>
            </>
               


           
        )
    }

    export default BackGround;
