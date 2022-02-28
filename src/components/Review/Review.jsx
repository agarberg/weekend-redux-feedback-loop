import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'
import axios from 'axios';

function Review(){
    //useSelector to pull data from each reducer/store
    const feelingReducer = useSelector(store => store.feelingReducer)
    const understandingReducer = useSelector(store => store.understandingReducer)
    const supportedReducer = useSelector(store => store.supportedReducer)
    const commentReducer = useSelector(store => store.commentReducer)
    const history = useHistory()
    //on submit, package up the 4 reducers and send to the database 
    const handleSubmit = event => {
        event.preventDefault();
        axios.post('/feedback', {feelingReducer, understandingReducer, supportedReducer, commentReducer})
        .then((response) => {
            console.log('POSTING TO DATABASE');
            history.push('/Success')
        })
        .catch((err) => {
            console.log('Error POSTING', err);
        });
};
  
      //append to DOM all the current feedback that is being sent to database
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