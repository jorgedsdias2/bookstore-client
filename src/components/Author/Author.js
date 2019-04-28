import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import ListAuthors from './ListAuthors';
import AddAuthor from './AddAuthor';

export default class Author extends Component {
    render() {
        return (
            <div>
                <Route exact path={`${this.props.match.url}`} component={ListAuthors} />
                <Route path={`${this.props.match.url}/author/:id?`} component={AddAuthor} />
            </div>
        );
    }
}