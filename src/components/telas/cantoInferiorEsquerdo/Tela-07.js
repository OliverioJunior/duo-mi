import React,{useState} from "react";
import "./Tela-07.css"
import Globais from "../../Globais";
function Tela_07(props) {
    const [icon, setIcon] = useState(false);
    function setDrawing() { 
        Globais.setDrawing = !Globais.setDrawing;
        setIcon(!icon);
    }
    const icons = Globais.setDrawing ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">https://fontawesome.com/license<path d="M480 128v208c0 97.05-78.95 176-176 176h-37.72c-53.42 0-103.7-20.8-141.4-58.58l-113.1-113.1C3.906 332.5 0 322.2 0 312C0 290.7 17.15 272 40 272c10.23 0 20.47 3.906 28.28 11.72L128 343.4V64c0-17.67 14.33-32 32-32s32 14.33 32 32l.0729 176C192.1 248.8 199.2 256 208 256s16.07-7.164 16.07-16L224 32c0-17.67 14.33-32 32-32s32 14.33 32 32l.0484 208c0 8.836 7.111 16 15.95 16S320 248.8 320 240L320 64c0-17.67 14.33-32 32-32s32 14.33 32 32l.0729 176c0 8.836 7.091 16 15.93 16S416 248.8 416 240V128c0-17.67 14.33-32 32-32S480 110.3 480 128z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">https://fontawesome.com https://fontawesome.com/license<path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"/></svg>

    return (
        <div className="cantoInferiorEsquerdo">
            <div className='giz' />
            <canvas className='desenhoArea' >
            </canvas>
            <div className='selecionarCores'>
                <button className= 'desenhar' onClick={setDrawing}>
                {icons}
                </button>
                <button className='vermelho'/>
                <button className='amarelo'/>
                <button className='verde'/>
                <button className='azul'/>
                <button className='roxo'/>
                <button className='salvarDesenho'/>

               
            </div>
        </div>
    )
}

export default Tela_07;