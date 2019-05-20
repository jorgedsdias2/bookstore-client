import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import AuthorBox from './AuthorBox';

export default class AuthorRoute extends Component {
    render() {
        return (
            <div>
                <Route exact path={`${this.props.match.url}`} component={AuthorBox} />
                <Route exact path={`${this.props.match.url}/add`} component={AuthorBox} />
            </div>
        );
    }
}