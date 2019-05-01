import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import Dashboard from './components/Dashboard/Dashboard';
import AuthorRoute from './components/Author/AuthorRoute';
import LoginForm from './components/Login/LoginForm';
import Logout from './components/Login/Logout';
import AppLayout from './layout/AppLayout';
import LoginLayout from './layout/LoginLayout';
import store from './store';

ReactDOM.render(
    (
        <Provider store={store}>
            <Router>
                <Switch>
                    <AppLayout exact path="/" component={Dashboard} />
                    <AppLayout path="/authors" component={AuthorRoute} />
                    <LoginLayout path="/login" component={LoginForm} />
                    <Route path="/logout" component={Logout} />
                </Switch>
            </Router>
        </Provider>
    ),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();