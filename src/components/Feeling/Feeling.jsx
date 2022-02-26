import {useState} from 'react';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { HashRouter as Router, Route, Link } from "react-router-dom";

function Feeling(){
  const history = useHistory()
    const [feeling, setFeeling] = useState(0)
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({
          type: 'ADD_FEELING',
          payload: feeling
        })
        history.push('/Understanding')
      }
    return (
        <> 
        <h2>How are you feeling today?</h2>
        <form onSubmit={handleSubmit} className="Feeling">
          <input 
            required 
            placeholder="0-5" 
            type="number" 
            min="0" max="5"
            onChange={(event) => setFeeling(event.target.value)}/>
        <button type="submit">NEXT</button>
        </form>
      </>
    )
}

export default Feeling