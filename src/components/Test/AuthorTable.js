import React, { Component } from 'react';
import {connect} from 'react-redux';

import AuthorApi from '../../api/AuthorApi';

import $ from 'jquery';

// css import
import '../../css/dataTables/dataTables.bootstrap.css'
import '../../css/dataTables/dataTables.responsive.css';

// js import
import '../../js/dataTables/jquery.dataTables.min.js';
import '../../js/dataTables/dataTables.bootstrap.min.js';

export class AuthorTable extends Component {

    componentWillMount() {
        this.props.getAuthors();
    }
    
    componentDidMount() {
        $('#dataTables').DataTable({
            retrieve: true,
            responsive: true
        });
    }

    render() {
        if(this.props.authors) {
            return (
                <div>
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
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
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

const AuthorTableContainer = connect(mapStateToProps, mapDispatchToProps)(AuthorTable);

export default AuthorTableContainer;