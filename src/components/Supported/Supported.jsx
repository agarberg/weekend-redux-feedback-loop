import {useState} from 'react';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'


function Supported(){
    //initalize state variables 
    const history = useHistory()
    const [supported, setSupported] = useState('')
    const dispatch = useDispatch();

    //on submit click dispatch supported info
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
            placeholder="Supported? 0-5" 
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