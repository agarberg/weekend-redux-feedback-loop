import {useState} from 'react';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'


function Comments(){
    //initalize state variables 
    const [comments, setComments] = useState('')
    const dispatch = useDispatch();
    const history = useHistory()

    //on submit click dispatch feeling info
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