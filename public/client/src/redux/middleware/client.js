import {applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import logger from './logger';

const composeEnhancers = (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

let devMiddleware = [];
if (process.env.NODE_ENV !== 'production') {
    devMiddleware = [
        logger,
    ];
}

const client = applyMiddleware(
    reduxThunk,
    ...devMiddleware,
);

export default composeEnhancers(client);