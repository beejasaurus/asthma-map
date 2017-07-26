import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import create from './redux/create';
import {fetchAsthmaPrevalenceIfNeeded} from './redux/modules/asthmaPrevalence';
import Routes from './scenes';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = create();
store.dispatch(fetchAsthmaPrevalenceIfNeeded());

ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
