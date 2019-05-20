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
                    send={this.props.send}
                    showMessage={this.props.showMessage}
                />
            </div>
        );
    }
}

export class AuthorList extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">List Authors</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    An List of Authors
                                </div>
                                <div className="panel-body">
                                    <AuthorTable showMessage={this.props.showMessage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
            </div>
        );
    }
}