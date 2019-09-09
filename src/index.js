import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider } from 'react-redux';
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer,
})

const logger = store => {
    return next => {
        return action => {
            console.log('middleware', action);
            const result = next(action);
            console.log('result', store.getState())
            return result;
        }
    }
}

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


serviceWorker.unregister();
