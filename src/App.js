import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import BackGround from './components/background/BackGround';
import CelBackground from './components/celBackground/celBackground';
function App() {
  return (
    <div>
    <Router>
       <BackGround /> 
       <CelBackground/>
      </Router>
    </div>
  );
}

export default App;
