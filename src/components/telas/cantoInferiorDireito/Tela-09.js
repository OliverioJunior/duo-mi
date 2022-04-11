import React from 'react'
import "./Tela-09.css"


function Tela_09() {
    return (

        <div id ='jobs' className='cantoInferiorDireito'>
            <div className='tvSemColapsar'>
                <h1 className='fraseTv'>Visite nosso <span> portfólio </span>  de jobs</h1>
                <div className='televisor'>
                     <a  className='botaoPlay'  dangerouslySetInnerHTML={{ __html: '' }} href='https://www.behance.net/estudioduomi?tracking_source=search_projects%7Cduomi%20' rel="noreferrer"  target ='_blank'>
                     </a>
                </div>
            </div>
        </div>

    )
}
export default Tela_09;