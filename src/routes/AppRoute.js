import React from 'react';
import App from '../App';
import {Route} from 'react-router-dom';

const AppRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <App>
                <Component {...matchProps} />
            </App>
        )} />
    )
};

export default AppRoute;