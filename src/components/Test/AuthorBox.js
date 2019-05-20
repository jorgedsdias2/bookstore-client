import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import AuthorTable from './AuthorTable';
import AuthorForm from './AuthorForm';

export class AuthorAdd extends Component {
    render() {
        return (
            <div>
                <AuthorForm
                    title="Add Author"
                    subtitle="Form to add an author"
                    button="Add Author"
                />
            </div>
        );
    }
}

export class AuthorEdit extends Component {
    render() {
        return (
            <div>
                <AuthorForm
                    title="Edit Author"
                    subtitle="Form to edit an author"
                    button="Edit Author"
                />
            </div>
        );
    }
}

export class AuthorList extends Component {
    render() {
        return (
            <div>
                <AuthorTable />
            </div>
        );
    }
}

export default class AuthorBox extends Component {
    render() {
        return (
            <div>
                <Route 
                    exact path={`${this.props.match.url}`} 
                    render={(props) => <AuthorList {...props} />}
                />
                <Route 
                    exact path={`${this.props.match.url}/add`} 
                    render={(props) => <AuthorAdd {...props} />}
                />
                <Route 
                    exact path={`${this.props.match.url}/edit/:id`} 
                    render={(props) => <AuthorEdit {...props} />}
                />
            </div>
        );
    }
}