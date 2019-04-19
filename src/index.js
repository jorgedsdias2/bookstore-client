import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Author from './components/Author/Author';
import Login from './components/Login/Login';
import FormLogin from './components/Login/FormLogin';
import Logout from './components/Login/Logout';

const AppRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <App>
                <Component {...matchProps} />
            </App>
        )} />
    )
};

const LoginRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <Login>
                <Component {...matchProps} />
            </Login>
        )} />
    )
};

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