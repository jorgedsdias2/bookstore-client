import React from 'react';
import Login from '../components/Login/Login';
import {Route} from 'react-router-dom';

const LoginRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <Login>
                <Component {...matchProps} />
            </Login>
        )} />
    )
};

export default LoginRoute;