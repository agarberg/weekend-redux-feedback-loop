import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
//import components to APP
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Success from '../Success/Success';
import Supported from '../Supported/Supported';
import Understanding from '../Understanding/Understanding';
import Header from '../Header/Header'
import Review from '../Review/Review';

function App() {

  return (
    <Router> 
    <div className='App'>
      <Route path="/" exact>
        <Header/>
        <Feeling/>
      </Route>
      <Route path="/Understanding">
        <Header/>
        <Understanding/>
      </Route>
      <Route path="/Supported">
        <Header/>
        <Supported/>
      </Route>
        <Route path="/Comments">
        <Header/>
        <Comments/>
      </Route>
        <Route path="/Review">
        <Review/>
      </Route>
      <Route path="/Success">
        <Success/>
      </Route>
    </div>
    </Router>
  );
}

export default App;
