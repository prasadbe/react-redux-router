import {createStore, combineReducers, applyMiddleware} from 'redux';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory, Router, Route, Link} from 'react-router';
import {syncHistoryWithStore, routerReducer, routerMiddleware, push} from 'react-router-redux';
import bootstrapJs from 'bootstrap/dist/js/bootstrap';
import bootstrapCss from 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import {login} from './reducers/index';
let store = createStore(combineReducers({login, routing: routerReducer}));
console.log(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
    <Provider store={store}>
    {/* Tell the Router to use our enhanced history */}
    <Router history={history}>
        <Route path="/" component={App}>
            <Route path="about" component={About}/>
            <Route path="login" component={Login}/>
        </Route>
    </Router>

</Provider>, document.getElementById('container'));
