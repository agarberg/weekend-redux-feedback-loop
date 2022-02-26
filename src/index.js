import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from "redux-logger";
import { Provider } from "react-redux";


const feelingReducer = (state = [], action) => {
    if (action.type === "ADD_FEELING") {
        return [...state, action.payload]
    }    
        return state;
};
const understandingReducer = (state = [], action) => {
    if (action.type === "ADD_UNDERSTANDING") {
        return [...state, action.payload]
    }    
        return state;
};
const supportedReducer = (state = [], action) => {
    if (action.type === "ADD_SUPPORTED") {
        return [...state, action.payload]
}       
        return state;
};
const commentReducer = (state = [], action) => { 
    if (action.type === "ADD_COMMENTS") {
        return [...state, action.payload]
}
        return state;
  };

  const reduxStore = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportedReducer,
        commentReducer, 
    }),
    applyMiddleware(logger)
)



ReactDOM.render(  
<Provider store={reduxStore}>
<App />
</Provider>,
document.getElementById("root"));
registerServiceWorker();
