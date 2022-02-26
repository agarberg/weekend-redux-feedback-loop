import {useState} from 'react';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { HashRouter as Router, Route, Link } from "react-router-dom";

function Supported(){
    const history = useHistory()
    const [supported, setSupported] = useState(0)
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({
          type: 'ADD_SUPPORTED',
          payload: supported
        })
        history.push('/Comments')
      }
    return (
        <> 
        <h2>How well are you being supported?</h2>
        <form onSubmit={handleSubmit} className="Supported">
          <input 
            required 
            placeholder="0-5" 
            type="number" 
            min="0" max="5"
            value={supported}
            onChange={(event) => setSupported(event.target.value)}/>
        <button type="submit">NEXT</button>
        </form>
      </>
    )
}

export default Supported;