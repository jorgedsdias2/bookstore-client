import React, { Component } from 'react';
import AuthorTable from './AuthorTable';

export default class AuthorList extends Component {

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
                                    <AuthorTable
                                        authors={this.props.authors}
                                        showMessage={this.props.showMessage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}