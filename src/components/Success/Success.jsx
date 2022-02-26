import {useState} from 'react';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { HashRouter as Router, Route, Link } from "react-router-dom";

function Success(){
  const history = useHistory()

    const handleSubmit = event => {
        event.preventDefault();
        history.push('/')
      }
    return (
        <> 
        <h2>Feedback Submitted</h2>
        <h2>Thank You!</h2>
        <button onClick={handleSubmit}>Leave New Feedback</button>
      </>
    )
}
export default Success