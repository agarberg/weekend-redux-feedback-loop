import {useState} from 'react';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

function Understanding(){
  const history = useHistory()
    const [understanding, setUnderstanding] = useState(0)
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({
          type: 'ADD_UNDERSTANDING',
          payload: understanding
        })
        history.push('/Supported')
      }
    return (
        <> 
        <h2>How well are you understanding the content?</h2>
        <form onSubmit={handleSubmit} className="Understanding">
          <input 
            required 
            placeholder="0-5" 
            type="number" 
            min="0" max="5"
            onChange={(event) => setUnderstanding(event.target.value)}/>
        <button type="submit">NEXT</button>
        </form>
      </>
    )
}

export default Understanding;