import React from 'react';
import App from '../App';
import {Route} from 'react-router-dom';

const AppLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <App>
                <Component {...matchProps} />
            </App>
        )} />
    )
};

export default AppLayout;