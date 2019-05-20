import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from "react-router";

import AuthorApi from '../../api/AuthorApi';

import $ from 'jquery';

// css import
import '../../css/dataTables/dataTables.bootstrap.css'
import '../../css/dataTables/dataTables.responsive.css';

// js import
import '../../js/dataTables/jquery.dataTables.min.js';
import '../../js/dataTables/dataTables.bootstrap.min.js';

export class AuthorTable extends Component {

    constructor(props) {
        super(props);
        this.edit = this.edit.bind(this);
        console.log(this.props);
    }

    componentWillMount() {
        this.props.getAuthors();
    }

    componentDidMount() {
        $('#dataTables').DataTable({
            retrieve: true,
            responsive: true
        });
    }

    edit(event, page) {
        event.preventDefault();
        this.props.history.push(page);
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    render() {
        if(this.props.authors) {
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
                                        <div className="table-responsive">
                                            {this.props.showMessage}
                                            <table className="table table-striped table-bordered table-hover" id="dataTables">
                                                <thead>
                                                    <tr>
                                                        <th>Author Name</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.props.authors.map(function(author) {
                                                            return (
                                                                <tr key={author._id}>
                                                                    <td>{author.name}</td>
                                                                    <td className="col-md-2">
                                                                        <button onClick={(e) => {this.edit(e, `/authors/edit/${author._id}`)}} className="btn btn-primary"><span className="glyphicon glyphicon-edit"></span></button>&nbsp;
                                                                        <button className="btn btn-danger"><span className="glyphicon glyphicon-remove"></span></button>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }.bind(this))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = state => {
    return {
        authors: state.author.authors,
        msg: state.notification.msg,
        alert: state.notification.alert
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getAuthors: () => {
            dispatch(AuthorApi.getAuthors());
        }
    }
};

const AuthorTableContainer = connect(mapStateToProps, mapDispatchToProps) (AuthorTable);
const AuthorTableWithRouter = withRouter(AuthorTableContainer);
export default AuthorTableWithRouter;