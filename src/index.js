import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Feeling from './components/Feeling/Feeling'
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from "redux-logger";
import { Provider } from "react-redux";

const feedbackReducer = (state = [], action) => {
    if (action.type === "ADD_FEELING") {
        return [...state, action.payload]
    }
        else if (action.type === "ADD_UNDERSTANDING") {
            return [...state, action.payload]
        }
            else if (action.type === "ADD_SUPPORT") {
                return [...state, action.payload]
            }
                else if (action.type === "ADD_COMMENTS") {
                    return [...state, action.payload]
                }
    return state;
  };

  const reduxStore = createStore(
    combineReducers({
        feedbackReducer 
    }),
    applyMiddleware(logger)
)



ReactDOM.render(  
<Provider store={reduxStore}>
<App />
</Provider>,
document.getElementById("root"));
registerServiceWorker();
