import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { HashRouter as Router, Route, Link } from "react-router-dom";

function Review(){
    const feelingReducer = useSelector(store => store.feelingReducer)
    const understandingReducer = useSelector(store => store.understandingReducer)
    const supportedReducer = useSelector(store => store.supportedReducer)
    const commentReducer = useSelector(store => store.commentReducer)
  const history = useHistory()
    const dispatch = useDispatch();
    const reduxStore = useSelector(store => store)
    const handleSubmit = event => {
        event.preventDefault();
        history.push('/Success')
      }
    return (
        <> 
        <h2>Review Your Feedback</h2>
        <p>Feelings : {feelingReducer}</p>
        <p>Understanding : {understandingReducer}</p>
        <p>Support : {supportedReducer}</p>
        <p>Comments : {commentReducer}</p>
        <button type="submit">Submit</button>
      </>
    )
}
export default Review