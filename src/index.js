import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Author from './components/Author/Author';
import FormLogin from './components/Login/FormLogin';
import Logout from './components/Login/Logout';
import AppRoute from './routes/AppRoute';
import LoginRoute from './routes/LoginRoute';

ReactDOM.render(
    (<Router>
        <Switch>
            <AppRoute exact path="/" component={Dashboard} />
            <AppRoute path="/authors" component={Author} />
            <LoginRoute path="/login" component={FormLogin} />
            <Route path="/logout" component={Logout} />
        </Switch>
    </Router>),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();