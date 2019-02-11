import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools ';
import routes from './routes';

store.dispatch(getCountries());

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
        <DevTools />
    </Provider>,
    document.getElementById('root')
);