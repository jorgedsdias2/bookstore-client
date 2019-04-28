import React, { Component } from 'react';
import $ from 'jquery';

// css import
import '../../css/dataTables/dataTables.bootstrap.css'
import '../../css/dataTables/dataTables.responsive.css';

// js import
import '../../js/dataTables/jquery.dataTables.min.js';
import '../../js/dataTables/dataTables.bootstrap.min.js';

export default class ListAuthors extends Component {

    constructor(props) {
        super(props);
        this.state = {msg:localStorage.getItem('msg'), alert:'', authors:[]};
        this.actionPage = this.actionPage.bind(this);
    }

    componentDidMount() {
        const request = {
            method: 'GET',
            headers: new Headers({
                'Content-type': 'application/json',
                'x-access-token': localStorage.getItem('x-access-token')
            })
        };

        fetch('http://localhost:3000/api/authors', request).then(response => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error('Error listing authors!');
            }
        }).then(response => {
            this.setState({authors: response.authors});
        }).catch(error => {
            this.setState({msg: error.message, alert: 'danger'});
        });
    }

    componentDidUpdate() {
        $('#dataTables').DataTable({
            retrieve: true,
            responsive: true
        });
    }

    actionPage(event, page) {
        event.preventDefault();
        this.props.history.push(page);
    }

    render() {
        let showMessage = '';
        if(this.state.msg) {
            showMessage =
            <div className={`alert alert-${this.state.alert}`} role="alert">
                {this.state.msg}
            </div>
        }

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
                                        {showMessage}
                                        <table className="table table-striped table-bordered table-hover" id="dataTables">
                                            <thead>
                                                <tr>
                                                    <th>Author Name</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.authors.map(function(author) {
                                                        return (
                                                            <tr key={author._id}>
                                                                <td>{author.name}</td>
                                                                <td className="col-md-2">
                                                                    <button onClick={(e) => {this.actionPage(e, `/authors/author/${author._id}`)}} className="btn btn-primary"><span className="glyphicon glyphicon-edit"></span></button>&nbsp;
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
    }
}