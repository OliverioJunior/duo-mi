import React, { useState, useRef, useLayoutEffect} from "react";
import "./Tela-07.css"
import Globais from "../../Globais";
import CanvasDraw from "react-canvas-draw";
import axios from "axios";





function Tela_07(props) {

    const pen = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">https://fontawesome.com/license<path d="M480 128v208c0 97.05-78.95 176-176 176h-37.72c-53.42 0-103.7-20.8-141.4-58.58l-113.1-113.1C3.906 332.5 0 322.2 0 312C0 290.7 17.15 272 40 272c10.23 0 20.47 3.906 28.28 11.72L128 343.4V64c0-17.67 14.33-32 32-32s32 14.33 32 32l.0729 176C192.1 248.8 199.2 256 208 256s16.07-7.164 16.07-16L224 32c0-17.67 14.33-32 32-32s32 14.33 32 32l.0484 208c0 8.836 7.111 16 15.95 16S320 248.8 320 240L320 64c0-17.67 14.33-32 32-32s32 14.33 32 32l.0729 176c0 8.836 7.091 16 15.93 16S416 248.8 416 240V128c0-17.67 14.33-32 32-32S480 110.3 480 128z" /></svg>
    const hand = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">https://fontawesome.com https://fontawesome.com/license<path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z" /></svg>
    const erase = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <defs>
        <linearGradient id="MyGradient">
          <stop offset="20%" stop-color="#FFB113" />
          <stop offset="50%" stop-color="#B01446" />
          <stop offset="600%" stop-color="#4D0C5C" />
        </linearGradient>
      </defs><path d="M480 416C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H150.6C133.7 480 117.4 473.3 105.4 461.3L25.37 381.3C.3786 356.3 .3786 315.7 25.37 290.7L258.7 57.37C283.7 32.38 324.3 32.38 349.3 57.37L486.6 194.7C511.6 219.7 511.6 260.3 486.6 285.3L355.9 416H480zM265.4 416L332.7 348.7L195.3 211.3L70.63 336L150.6 416L265.4 416z"/></svg>
    const clear = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M96 96h384v288h64V72C544 50 525.1 32 504 32H72C49.1 32 32 50 32 72V384h64V96zM560 416H416v-48c0-8.838-7.164-16-16-16h-160C231.2 352 224 359.2 224 368V416H16C7.164 416 0 423.2 0 432v32C0 472.8 7.164 480 16 480h544c8.836 0 16-7.164 16-16v-32C576 423.2 568.8 416 560 416z"/><defs>
    <linearGradient id="MyGradient">
      <stop offset="20%" stop-color="#FFB113" />
      <stop offset="50%" stop-color="#B01446" />
      <stop offset="600%" stop-color="#4D0C5C" />
    </linearGradient>
  </defs></svg>
    const arrowLeft = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 256c0 123.4-100.5 223.9-223.9 223.9c-48.86 0-95.19-15.58-134.2-44.86c-14.14-10.59-17-30.66-6.391-44.81c10.61-14.09 30.69-16.97 44.8-6.375c27.84 20.91 61 31.94 95.89 31.94C344.3 415.8 416 344.1 416 256s-71.67-159.8-159.8-159.8C205.9 96.22 158.6 120.3 128.6 160H192c17.67 0 32 14.31 32 32S209.7 224 192 224H48c-17.67 0-32-14.31-32-32V48c0-17.69 14.33-32 32-32s32 14.31 32 32v70.23C122.1 64.58 186.1 32.11 256.1 32.11C379.5 32.11 480 132.6 480 256z" /><linearGradient id="MyGradient">
    <stop offset="20%" stop-color="#FFB113" />
    <stop offset="50%" stop-color="#B01446" />
    <stop offset="600%" stop-color="#4D0C5C" />
  </linearGradient></svg>
    const [icon, setIcon] = useState(false);
    const icons = Globais.setDrawing ? pen : hand;
    const [draw, setDraw] = useState(true);
    const [color, setColor] = useState("#000");
   /*  const [save,setSave] = useState(null); */
    const canvasRef = useRef(null);
    const buttonRef = useRef(null);
    const clearRef = useRef(null);
    const arrowLeftRef = useRef(null);
    let link = useRef(null);
    let bolleanLink = false
    
      useLayoutEffect(() => {
        const element = canvasRef.current;
        const button = buttonRef.current;
        const clear = clearRef.current;
        const arrowLeft = arrowLeftRef.current;
        
       
        arrowLeft.addEventListener('click', () => {
            setTimeout(() => {
                element.undo()
                console.log(2)
            }, 1000);
        })
        clear.addEventListener('click', () => {
            element.clear()
        })
        button.addEventListener('click',()=>{
            link.current = element.getDataURL()
            bolleanLink = true
           })
    })
    async function  download(){
         
        if(bolleanLink){
            const linkDownload = await link.current;
            bolleanLink = false;
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

   

    

    return (
        <div className="cantoInferiorEsquerdo">
            <div className='criatividade'>
            <CanvasDraw ref = {canvasRef}className="drawCanvas"
                canvasWidth={1120}
                canvasHeight={540}
                disabled = {draw} 
                hideGrid = {true} 
                brushColor = {color}
                brushRadius= {5}
                gridColor= {"rgba(23,2,30,0.17)"}
               /*  saveData = {save} */
            />
            </div>
            <div className='selecionarCores'>
                <button className='desenhar' onClick={setDrawing}>
                    {icons}
                </button>
                <input type = "color" className='palheta' onChange = { e => setColor(e.target.value)} />
                <button ref = {clearRef} className='clear'>
                    {clear}
                </button>
                <button ref = {arrowLeftRef} className='arrowLeft'>
                    {arrowLeft}
                </button>
                <button className='erase' onClick = {()=> setColor('#ffff')}>{erase}</button>
                <button ref={buttonRef} className='salvarDesenho' onClick={download}/>
                


            </div>
        </div>
    )
}

export default Tela_07;