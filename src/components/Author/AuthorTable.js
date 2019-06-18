import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
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
        if(this.props.location.state) {
            this.state = {msg:this.props.location.state.msg, alert:this.props.location.state.alert, authors:[]};
        } else {
            this.state = {msg:'', alert:'', authors:[]};
        }
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentWillMount() {
        this.props.listAuthors();
    }

    componentDidUpdate() {
        $('#dataTables').DataTable({
            retrieve: true,
            responsive: true
        });
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.authors) {
            this.setState({authors: nextProps.authors});
        }

        if(nextProps.msg) {
            this.setState({msg: nextProps.msg, alert: nextProps.alert});
        }
    }

    edit(event, page) {
        event.preventDefault();
        this.props.history.push(page);
    }

    delete(event, id) {
        event.preventDefault();
        this.props.removeAuthor(id);
    }

    render() {
        if(this.props.authors) {
            let showMessage = '';
            if(this.state.msg) {
                showMessage =
                <div className={`alert alert-${this.state.alert}`} role="alert">
                    {this.state.msg}
                </div>
            }

            const authors = this.state.authors.map(function(author) {
                return (
                    <tr key={author._id}>
                        <td>{author.name}</td>
                        <td className="col-md-2">
                            <button onClick={(e) => {this.edit(e, `/authors/edit/${author._id}`)}} className="btn btn-primary"><span className="glyphicon glyphicon-edit"></span></button>&nbsp;
                            <button onClick={(e) => {this.delete(e, author._id)}} className="btn btn-danger"><span className="glyphicon glyphicon-remove"></span></button>
                        </td>
                    </tr>
                );
            }.bind(this));

            const noAuthors = <tr><td>No authors found</td><td></td></tr>

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
                                        {showMessage}
                                        <div className="table-responsive">
                                            <table className="table table-striped table-bordered table-hover" id="dataTables">
                                                <thead>
                                                    <tr>
                                                        <th>Author Name</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <ReactCSSTransitionGroup
                                                transitionName="dashboard"
                                                transitionEnter={false}
                                                transitionLeaveTimeout={300}
                                                component="tbody">
                                                    {/* { this.state.authors.size > 0 ? authors : noAuthors } */}
                                                    {authors}
                                                </ReactCSSTransitionGroup>
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

AuthorTable.propTypes = {
    history: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        authors: state.authors,
        msg: state.notification.msg,
        alert: state.notification.alert
    }
};

const mapDispatchToProps = dispatch => {
    return {
        listAuthors: () => {
            dispatch(AuthorApi.listAuthors());
        },
        removeAuthor: (id) => {
            dispatch(AuthorApi.removeAuthor(id));
        }
    }
};

const AuthorTableContainer = withRouter(connect(mapStateToProps, mapDispatchToProps) (AuthorTable));
export default AuthorTableContainer;
