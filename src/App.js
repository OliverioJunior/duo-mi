import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import BackGround from './components/BackGround';
function App() {
  return (
    <div>
    <Router>
       <BackGround /> 
       <Switch>
        <Route path='/' exact />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
