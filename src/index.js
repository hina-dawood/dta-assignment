import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index'
import ReduxPromise from 'redux-promise';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
