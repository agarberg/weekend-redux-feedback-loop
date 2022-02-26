import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { HashRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

function Review(){
    const feelingReducer = useSelector(store => store.feelingReducer)
    const understandingReducer = useSelector(store => store.understandingReducer)
    const supportedReducer = useSelector(store => store.supportedReducer)
    const commentReducer = useSelector(store => store.commentReducer)
    const history = useHistory()

    const handleSubmit = event => {
        // event.preventDefault();
        axios.post('/feedback', {feelingReducer, understandingReducer, supportedReducer, commentReducer})
        .then((response) => {
            console.log('POSTING TO DATABASE');
            history.push('/Success')
        })
        .catch((err) => {
            console.log('Error POSTING', err);
        });
};
  
      
    return (
        <> 
        <h2>Review Your Feedback</h2>
        <p>Feelings : {feelingReducer}</p>
        <p>Understanding : {understandingReducer}</p>
        <p>Support : {supportedReducer}</p>
        <p>Comments : {commentReducer}</p>
        <button onClick={handleSubmit}>Submit Your Feedback!</button>
      </>
    )
}
export default Review