import React,{useState} from 'react'
import "./FotoEmily.css"



function FotoEmily() {
    const [click,setClick] = useState(false);
    const virar = (e)=>{
        setClick(!click)
        if(click){
            e.target.style.transform = " scaleX(-1)"
         /*    e.target.children[4].style.display = "block" */
            console.log(e.target.children)
        } else {
            e.target.style.transform = " scaleX(1)"
           /*  e.target.children[4].style.display = "none" */
        }
    }

    return (
        <>
            <div className="plantinha" />
                <div className="Emily"
                onClick={virar}>
                    <div className="adesivo" />
                    <div className="balao" />
                    <div className="seta_curva" />
                </div>
                <div className='fundo'/>
        </>
    )
}

export default FotoEmily;
