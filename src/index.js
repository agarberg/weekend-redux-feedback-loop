import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from "redux-logger";
//allows store to comm with react 
import { Provider } from "react-redux";
import './index.css';
import App from './components/App/App';

//reducers to take in feedback based on action type
const feelingReducer = (state = [], action) => {
    if (action.type === "ADD_FEELING") {
        return action.payload
    }    
        return state;
};
const understandingReducer = (state = [], action) => {
    if (action.type === "ADD_UNDERSTANDING") {
        return action.payload
    }    
        return state;
};
const supportedReducer = (state = [], action) => {
    if (action.type === "ADD_SUPPORTED") {
        return action.payload
}       
        return state;
};
const commentReducer = (state = [], action) => { 
    if (action.type === "ADD_COMMENTS") {
        return action.payload
}
        return state;
  };
//create redux store with the 4 reducers 
  const reduxStore = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportedReducer,
        commentReducer, 
    }),
    //enable logger 
    applyMiddleware(logger)
)



ReactDOM.render(  
<Provider store={reduxStore}>
<App />
</Provider>,
document.getElementById("root"));
registerServiceWorker();
