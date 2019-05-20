import React from 'react';
import Login from '../Login';
import {Route} from 'react-router-dom';

const LoginLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <Login>
                <Component {...matchProps} />
            </Login>
        )} />
    )
};

export default LoginLayout;