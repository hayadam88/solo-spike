import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const messageReducer = (state = [], action) => {
    if (action.type === 'SET_MESSAGES') {
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        messageReducer
    }),
    applyMiddleware(logger)
);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
