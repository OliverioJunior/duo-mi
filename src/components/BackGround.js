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
        posClick: {x:0,
        y:0},
        savePosicao:{x:0,y:0}
    }


    
    window.addEventListener("mousedown", (e) => {
        
        mouse.ativo = true
        mouse.movendo = true
        mouse.posClick.x = e.clientX
        mouse.posClick.y = e.clientY
        console.log(e)
       
    })
    window.addEventListener("mousemove", (e)=>{
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

       window.addEventListener("mouseup", (e) => {
        mouse.ativo = false;
        mouse.movendo = false;
        mouse.savePosicao.x += mouse.posAnterior.x*(-1)
        mouse.savePosicao.y += mouse.posAnterior.y*(-1)
      }) 

     /* window.addEventListener("mousemove", function ciclo(e){
        
        if(mouse.ativo){
            mouse.movendo = true
        }
        if(mouse.ativo && mouse.movendo){
            mouse.posAnterior.x = mouse.posClick.x - e.clientX;
            mouse.posAnterior.y = mouse.posClick.y - e.clientY;
            mouse.moveu.y = e.clientY;
            mouse.moveu.x = e.clientX;
            console.log(mouse.posAnterior.x)
        }
        
    }) 
    let mover = 0
     window.addEventListener('mousemove', ()=>{
        mover = setTimeout(()=>{
            if(mouse.ativo && mouse.movendo){
                mouse.pos.x = mouse.posAnterior.x - mouse.moveu.x
                mouse.pos.y = mouse.posAnterior.y - mouse.moveu.y
                console.log(mouse.pos.x)
                window.scrollTo({top:mouse.pos.y, left:mouse.pos.x, behavior: "smooth"})
            } else {
                return
            }
            
        },10)   
    }) 
  
 */





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
