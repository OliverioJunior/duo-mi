import React, { useState, useRef, useLayoutEffect} from "react";
import "./Criatividade.css"
import Globais from "../../Globais";
import CanvasDraw from "react-canvas-draw";
import axios from "axios";
import Icons from './const';




function Criatividade(props) {

    const [icon, setIcon] = useState(false);
    const 
    icons = Globais.setDrawing ? Icons.pen : Icons.hand;
    const [draw, setDraw] = useState(true);
    const [color, setColor] = useState("#000");
    const [size] = useState(5);
    const canvasRef = useRef(null);
    const buttonRef = useRef(null);
    const clearRef = useRef(null);
    const penSizeRef = useRef(null);
   /*  const inputRef = useRef(null);
    const containerRef = useRef(null); */
    let link = useRef(null);
    let bolleanLink = useRef(false)
    
      useLayoutEffect(() => {
        const element = canvasRef.current;
        const button = buttonRef.current;
        const clear = clearRef.current;
      /*   const penSize = penSizeRef.current; */
        /* const input = inputRef.current;
        const container = containerRef.current; */
        clear.addEventListener('click', () => {
            element.clear()
        })
        button.addEventListener('click',()=>{
            if(Globais.setDrawing){
                link.current = element.getDataURL()
                bolleanLink.current = true
            }
           })
     /*    container.addEventListener('mousedown',(e)=>{
            if(Globais.setDrawing){
                handlePen.Boolean = true;
                handlePen.y = e.clientY;
            }
         })
        container.addEventListener('mouseup',()=>{
            if(Globais.setDrawing){
                handlePen.Boolean = false;
                handlePen.moveY = 0
                return
            }
        })
        container.addEventListener('mousemove',(e)=>{
            if(handlePen.Boolean){
                handlePen.moveY = e.clientY - handlePen.y;
               
               console.log(handlePen.moveY + "ponto")
                    setSize(size + handlePen.moveY)
                    input.style.transform = `translateY(${size*1.5}px)`
            }
            
        }) */
    })
    async function  download(){
         
        if(bolleanLink){
            const linkDownload = await link.current;
            bolleanLink.current = false;
            const Blob = require('blob');
            axios({
                url: linkDownload,
                method: 'GET',
                responseType: 'blob', // important
              }).then((response) => {
                const url = window.URL.createObjectURL(new Blob.default([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'file.png');
                console.log(link)
                console.log(url)
                link.click();
            });
        }
    }
    ;
    function setDrawing() {
        Globais.setDrawing = !Globais.setDrawing;
        setDraw(!draw)
        setIcon(!icon);
    }

    window.addEventListener('mouseover', (e) => {
        if (Globais.setDrawing && e.target.classList.contains('desenhoArea')) {
            e.target.style.cursor = 'crosshair'
        }
    })
   /*  const handlePen = {
        y: 0,
        size: 10,
        Boolean: false,
        moveY: 0,
    } */
    

    

    return (
        <div className="cantoInferiorEsquerdo">
           <div className ="centerCantoInferior">
            <div className='criatividade'>
                <CanvasDraw ref = {canvasRef}className="drawCanvas"
                    canvasWidth={1120}
                    canvasHeight={540}
                    disabled = {draw} 
                    hideGrid = {true} 
                    brushColor = {color}
                    brushRadius= {size}
                    gridColor= {"rgba(23,2,30,0.17)"}
                
                />
                </div>
                <div className='selecionarCores'>
                    <button className='desenhar' onClick={setDrawing}>
                        {icons}
                    </button>
                    <input type = "color" className='palheta' onChange = { e => setColor(e.target.value)} />
                    <button ref = {clearRef} className='clear'>
                        {Icons.clear}
                    </button>
                    <button ref = {penSizeRef} className='arrowLeft'>
                     {Icons.arrowLeft}
                       {/*  <div className="penSizeRef"></div>
                        <div ref = {containerRef} className="containerInput">
                        <input ref = {inputRef} className="inputPen"type="value" name="pensize" value={handlePen.size} 
                        />
                        </div> */}
                    </button>
                    <button className='erase' onClick = {()=> setColor('#ffff')}>{Icons.erase}</button>
                    <button ref={buttonRef} className='salvarDesenho' onClick={download}/>
                </div>
           </div>
        </div>
    )
}

export default Criatividade;