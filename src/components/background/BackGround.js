/* eslint-disable react/jsx-pascal-case */
import React,{useState, useRef, useLayoutEffect, useContext } from 'react';
import './BackGround.css';
import { QuemSomos, RedesSociais, Formulario, Criatividade, Portfolio } from '../telas/index.js';
import Meio from '../telas/meio/Meio';
/* import ContentLoader,{Facebook} from 'react-content-loader'; */
import { ScrollMenu } from '../../context/ScrollMenu'
function BackGround() {
    const body = document.querySelector('body');
    const [show, setShow] = useState(true);
    const {loadTop} = useContext(ScrollMenu);
    const {loadLeft} = useContext(ScrollMenu);
    const {offLeft, setOffLeft} = useContext(ScrollMenu);
    const {offTop, setOffTop} = useContext(ScrollMenu)
    const {drawing} = useContext(ScrollMenu)
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
    let fineshLoad = useRef(false);

        useLayoutEffect(() => {
          
          window.addEventListener('DOMContentLoaded', () => {
             
              console.log('carregou') 
              console.log(loadTop)
              buttonScroll()
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
            window.scrollTo({ top: loadTop, left: loadLeft, behavior: 'smooth' })
            setShow(true);
        }
        
         window.addEventListener('mousedown', (e) => {
            e.preventDefault();
            if (drawing === false) {
                setOffLeft(window.scrollX);
                setOffTop(window.scrollY);
                mouse.x = e.clientX;
                mouse.y = e.clientY;
                mouse.mouseMove = true;
                body.style.cursor = 'grabbing';
            }
           
        })
        window.addEventListener('mouseup', (e) => {
            e.preventDefault();
            if (drawing === false) {
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
            if(drawing){
                setShow(true)
                return
            }
            if (mouse.mouseMove && drawing === false) {
                const x = e.clientX - mouse.x;
                const y = e.clientY - mouse.y;
                window.scrollTo(offLeft - x, offTop - y, { behavior: 'smooth' });
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
                    <Meio/>
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
