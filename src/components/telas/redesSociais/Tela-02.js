
import React from 'react';
import "./Tela-02.css";

function Tela_02(){
    return(
        <div className='meioSuperior'>
          <div className='centermeiosuperior'>
            <div className='meioFrase'>
                    <h1>Acompanhe-nos:</h1>
            </div> 
            <div className="redesSociais">
                    <a  dangerouslySetInnerHTML={{ __html: '' }} href='https://www.instagram.com/duomi.estudiocriativo/' rel="noreferrer" target="_blank" className='instagram'></a>
                    <a dangerouslySetInnerHTML={{ __html: '' }} href='https://www.behance.net/estudioduomi?tracking_source=search_projects%7Cduomi%20' rel="noreferrer"  target ='_blank' className='behance'></a>
                    <a dangerouslySetInnerHTML={{ __html: '' }} href='https://www.facebook.com/DuoM%C3%AD-Est%C3%BAdio-Criativo-105370734736231/' rel="noreferrer"  target ='_blank' className='facebook'></a>
                    <a dangerouslySetInnerHTML={{ __html: '' }} href='https://www.tiktok.com/@duomi.estudiocriativo' target ='_blank' rel="noreferrer"  className='tiktok'></a>
            </div>
          </div>
        </div>
    )
}

export default Tela_02;