import React from 'react'
import "./Portfolio.css"


function Portfolio() {
    const play = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"/></svg>
    return (

        <div id ='jobs' className='cantoInferiorDireito'>
            <div className='tvSemColapsar'>
                <h1 className='fraseTv'>Visite nosso <span> portfólio </span>  de jobs</h1>
                <div className='televisor'>
                    <button name='portfólio' className='botaoPlay'>
                        <i className='play'>
                            {play}
                            <a    dangerouslySetInnerHTML={{ __html: '' }} href='https://www.behance.net/estudioduomi?tracking_source=search_projects%7Cduomi%20' rel="noreferrer"  target ='_blank'>
                            </a>
                        </i>
                    </button>
                </div>
            </div>
        </div>

    )
}
export default Portfolio;