import React from 'react';
import "./Tela-02.css";

function Tela_02(){
    return(
        <div className='meioSuperior'>
           <div className='meioFrase'>
                <h1>Acompanhe-nos:</h1>
           </div> 
           <div className="redesSociais">
                <a href='https://www.instagram.com/duomi.estudiocriativo/' target="_blank" className='instagram'></a>
                <a href='https://www.behance.net/estudioduomi?tracking_source=search_projects%7Cduomi%20' target ='_blank' class='behance'></a>
                <a href='https://www.facebook.com/DuoM%C3%AD-Est%C3%BAdio-Criativo-105370734736231/' target ='_blank' className='facebook'></a>
                <a href='https://www.tiktok.com/@duomi.estudiocriativo' target ='_blank' className='tiktok'></a>
            </div>
        </div>
    )
}

export default Tela_02;