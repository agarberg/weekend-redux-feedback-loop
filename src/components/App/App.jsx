import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
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
      {/* <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header> */}
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
      <Route path="/Success" exact>
        <Success/>
        </Route>
      </Route>
        <Route path="/Review" exact>
        <Review/>
      </Route>
    </div>
    </Router>
  );
}

export default App;
