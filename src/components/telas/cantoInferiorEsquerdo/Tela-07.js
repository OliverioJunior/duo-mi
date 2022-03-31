import React, { useState } from "react";
import "./Tela-07.css"
import Globais from "../../Globais";
import CanvasDraw from "react-canvas-draw";
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


    const [icon, setIcon] = useState(false);
    const icons = Globais.setDrawing ? pen : hand;
    const [draw, setDraw] = useState(true);
    const [color, setColor] = useState("#000");
   /*  const [save,setSave] = useState(null); */
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

    function download(){
        
    }

    

    return (
        <div className="cantoInferiorEsquerdo">
            <div className='criatividade'>
            <CanvasDraw className="drawCanvas"
                canvasWidth={1120}
                canvasHeight={540}
                disabled = {draw} 
                hideGrid = {false} 
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
                <button className='vermelho' onClick = {()=> setColor('#F0523C')} />
                <button className='amarelo' onClick = {()=> setColor('#F8A74E')}/>
                <button className='verde' onClick = {()=> setColor('#64885B')}/>
                <button className='azul' onClick = {()=> setColor('#1A93AA')}/>
                <button className='roxo' onClick = {()=> setColor('#B17C95')}/>
                <button className='erase' onClick = {()=> setColor('#ffff')}>{erase}</button>
                <button className='salvarDesenho' onClick = {download} />


            </div>
        </div>
    )
}

export default Tela_07;