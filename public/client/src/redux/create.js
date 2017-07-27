import {
    createStore,
    // applyMiddleware
} from 'redux';
import reducer from './modules/reducer';
import {client} from './middleware';
// import createHistory from 'history/createBrowserHistory';
// import {Route} from 'react-router';
// import {ConnectedRouter,routerReducer,routerMiddleware,push} from 'react-router-redux';

// export const history = createHistory();
// const middleware = routerMiddleware(history);

const create = (preloadedState) => createStore(
    reducer,
    preloadedState,
    client,
    // applyMiddleware(middleware),
);

export default create;