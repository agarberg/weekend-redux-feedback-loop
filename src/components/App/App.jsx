import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Success from '../Success/Success';
import Supported from '../Supported/Supported';
import Understanding from '../Understanding/Understanding';


function App() {

  return (
    <Router> 
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Route path="Feeling/">
        <Feeling />  </Route>
      <Route path="Success/">
        <Success />  </Route>
      <Route path="Understanding/">
        <Understanding />  </Route>
      <Route path="Supported/">
        <Supported />  </Route>
    </div>
    </Router>
  );
}

export default App;