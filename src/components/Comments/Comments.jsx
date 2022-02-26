import {useState} from 'react';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { HashRouter as Router, Route, Link } from "react-router-dom";

function Comments(){
    const history = useHistory()
    const [comments, setComments] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({
          type: 'ADD_COMMENTS',
          payload: comments
        })
        history.push('/Review')
      }
    return (
        <> 
        <h2>Any comments you want to leave?</h2>
        <form onSubmit={handleSubmit} className="Comments">
          <input 
            placeholder="comments"
            type="text" 
            value={comments}
            onChange={(event) => setComments(event.target.value)}/>
        <button type="submit">NEXT</button>
        </form>
      </>
    )
}

export default Comments;