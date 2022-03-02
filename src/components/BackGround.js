/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react'
import './BackGround.css'
import { Tela_01, Tela_02, Tela_03, Tela_05, Tela_07, Tela_09 } from './telas/index.js';
import {resLeft, resTop, setTela} from './Navbar'



function BackGround() {
    console.log(resLeft)
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    /* const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false); */
    const body = document.querySelector("body")
    const mouse = {
        ativo: false,
        movendo: false,
        pos: {
            x: 0,
            y: 0
        },
        posAnterior: {
            x: 0,
            y: 1000
        },
        posClick: {
            x: 0,
            y: 0
        },
        savePosicao: { x: resTop, y: resLeft}
    }
    function slideScreen() {
        if (mouse.ativo) {
            mouse.pos.y = (mouse.savePosicao.y - mouse.posAnterior.y) * (-0.8)
            mouse.pos.x = (mouse.savePosicao.x - mouse.posAnterior.x) * (-0.8)
            window.scroll({ top: mouse.pos.y, left: mouse.pos.x })
        }
    }


    window.addEventListener("mousedown", (e) => {
        mouse.ativo = true
        mouse.posClick.x = e.clientX
        mouse.posClick.y = e.clientY
        body.style.cursor = "grabbing"
    })
    window.addEventListener("mousemove", (e) => {
        e.preventDefault()
        if(setTela){
            mouse.posClick.x = resTop
            mouse.posClick.y = resLeft
            setTela = false
        }
        if (mouse.ativo) {
            mouse.posAnterior.x = mouse.posClick.x - e.clientX;
            mouse.posAnterior.y = mouse.posClick.y - e.clientY;
            setTimeout(slideScreen(), 300)
        }
    })




    window.addEventListener("mouseup", () => {
        mouse.ativo = false;
        mouse.savePosicao.x += mouse.posAnterior.x * (-1);
        mouse.savePosicao.y += mouse.posAnterior.y * (-1);
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
        if (mouse.ativo) {
            setClick(true)
        } else {
            setClick(false)
        }
    };

    window.addEventListener('resize', showButton);
    window.addEventListener('load',()=>{
        window.scroll({
            top:2000,
            behavior:"smooth",
        })
    })
    
    return (
        <>
           
            <div className='back-ground'>

                <Tela_01 />
                <div className="cantoMeioEsquerdo" />
                <Tela_07 />
                <Tela_02 />
                <Tela_05 />



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
