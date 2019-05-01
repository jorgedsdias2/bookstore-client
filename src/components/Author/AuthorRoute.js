import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import AuthorList from './AuthorList';
import AuthorAdd from './AuthorAdd';
import AuthorEdit from './AuthorEdit';

export default class AuthorRoute extends Component {
    render() {
        return (
            <div>
                <Route exact path={`${this.props.match.url}`} component={AuthorList} />
                <Route path={`${this.props.match.url}/add`} component={AuthorAdd} />
                <Route path={`${this.props.match.url}/edit/:id`} component={AuthorEdit} />
            </div>
        );
    }
}