import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import ListAuthor from './ListAuthor';
import AddAuthor from './AddAuthor';
import EditAuthor from './EditAuthor';

export default class RouteAuthor extends Component {
    render() {
        return (
            <div>
                <Route exact path={`${this.props.match.url}`} component={ListAuthor} />
                <Route path={`${this.props.match.url}/add`} component={AddAuthor} />
                <Route path={`${this.props.match.url}/edit/:id`} component={EditAuthor} />
            </div>
        );
    }
}