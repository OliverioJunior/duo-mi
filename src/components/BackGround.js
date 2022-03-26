/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './BackGround.css';
import { Tela_01, Tela_02, Tela_03, Tela_07, Tela_09 } from './telas/index.js';
import  Tela_05  from './telas/meio/Tela-05';
import Globais from './Globais';


function  BackGround() {
    const body = document.querySelector('body');
    const mouse = {
        x: 0,
        y: 0,
        mouseMove: false,
        savePosition: {
            x: 0,
            y: 0
        },
        drawing: false,
    };
  window.addEventListener('mousedown',(e)=>{
      if(mouse.drawing === false){
            Globais.resRight =  window.scrollX;
            Globais.resTop = window.scrollY;
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.mouseMove = true;
            body.style.cursor = 'grabing';
    }
  })
  window.addEventListener('mouseup',()=>{
      if(mouse.drawing === false){
            mouse.mouseMove = false;
            mouse.savePosition.x = window.scrollX;
            mouse.savePosition.y = window.scrollY;
            body.style.cursor = 'grab';
    }
  })
  window.addEventListener('mousemove',(e)=>{
      //to take the mouse position
      //prevent mouse comportament 
    e.preventDefault();
    if(mouse.mouseMove && mouse.drawing === false){
        const x = e.clientX - mouse.x;
        const y = e.clientY - mouse.y;
        window.scrollTo(Globais.resRight - x, Globais.resTop - y, {behavior: 'smooth'});
    }
  })
  // function for first load center screen
    window.addEventListener('load', (e)=>{
       console.log(Tela_05)
    })



    

    
    return (
        <>
           
            <div className='back-ground'>

                <Tela_01 />
                <div className="cantoMeioEsquerdo" />
                <Tela_07 />
                <Tela_02 />
                <Tela_05 className='firstLoad'/>



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
