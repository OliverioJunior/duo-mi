import React from 'react';
import './App.css';
import BackGround from './components/background/BackGround';
import CelBackground from './components/celBackground/celBackground';
import ScrollMenuProvider from './context/ScrollMenu';
function App() {
  return (
    
     <ScrollMenuProvider>
       <BackGround/> 
       <CelBackground/>
      </ScrollMenuProvider>
   
  );
}

export default App;
