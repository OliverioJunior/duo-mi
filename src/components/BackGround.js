import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button.js';
import './BackGround.css'
import {Tela_01 , Tela_03 , Tela_05, Tela_07, Tela_09} from './telas/index.js';


function BackGround() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const body = document.querySelector("body")
    const mouse = {
        ativo: false,
        movendo: false,
        pos: {x:0, 
              y:0},
        posAnterior: {x:0, 
            y:0},
        posClick: {x:0,
        y:0},
        savePosicao:{x:0,y:0}
    }



    window.addEventListener("mousedown", (e) => {
       
        mouse.ativo = true
        mouse.movendo = true
        mouse.posClick.x = e.clientX
        mouse.posClick.y = e.clientY
        body.style.cursor = "grabbing"
    })
    window.addEventListener("mousemove", (e)=>{
        e.preventDefault()
        if(mouse.ativo && mouse.movendo){
            
            mouse.posAnterior.x = mouse.posClick.x - e.clientX;
            mouse.posAnterior.y = mouse.posClick.y - e.clientY;
            console.log(mouse.posAnterior.x)
            setTimeout(mover(),300) 
          }
      })


        function mover(){
          if(mouse.ativo && mouse.movendo){
              mouse.pos.y = (mouse.savePosicao.y - mouse.posAnterior.y)*(-0.8)
              mouse.pos.x = (mouse.savePosicao.x - mouse.posAnterior.x)*(-0.8)
              window.scroll({top:mouse.pos.y, left:mouse.pos.x})
           
              
           }
       } 

       window.addEventListener("mouseup", () => {
        mouse.ativo = false;
        mouse.movendo = false;
        mouse.savePosicao.x +=  mouse.posAnterior.x*(-1);
        mouse.savePosicao.y +=  mouse.posAnterior.y*(-1);
        body.style.cursor = "grab";
      }) 

   /*  const canvasRef = useRef(null) 
    const contextRef = useRef(null) 
    const [isDrawing, setIsDrawing] = useState(false)
    useEffect(() => {
    const canvas = canvasRef.current;
   
    const context = canvas.getContext('2d');
    context.scale(2,2);
    context.lineCap = "round";
    context.strokeStyle = "red";
    context.lineWidth = 1;
    contextRef.current = context;
    }, [])
    const startDrawing = (e) =>{
        setIsDrawing(true);
        const {clientX,clientY} = e;
        contextRef.current.beginPath();
        contextRef.current.moveTo(clientX,clientY);
        console.log(canvasRef.current)
    }
    const finishDrawing = () =>{
        contextRef.current.closePath()
        setIsDrawing(false)
    }
    const draw = (e) =>{
        const {clientX,clientY} = e;
       if(isDrawing){ 
           contextRef.current.lineTo(clientX,clientY)
           contextRef.current.stroke()
        }
    } */

     
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
        if(mouse.ativo){
            setClick(true)
        } else {
            setClick(false)
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>

            <div className='back-ground'>

               <Tela_01/>
                <div className="cantoMeioEsquerdo"/>
                <Tela_07  /* onMouseDown={startDrawing}
                    onMouseUp={finishDrawing}
                    onMouseMove={draw}
                    ref = {canvasRef} *//>
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
