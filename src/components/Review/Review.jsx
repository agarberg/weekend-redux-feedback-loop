import {useState} from 'react';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { HashRouter as Router, Route, Link } from "react-router-dom";

function Review(){
  const history = useHistory()
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        
        history.push('/Success')
      }
    return (
        <> 
        <h2>Review Your Feedback</h2>
      
        <button type="submit">Submit</button>
      </>
    )
}
export default Success