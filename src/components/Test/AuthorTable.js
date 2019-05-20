import React, { Component } from 'react';
import $ from 'jquery';

// css import
import '../../css/dataTables/dataTables.bootstrap.css'
import '../../css/dataTables/dataTables.responsive.css';

// js import
import '../../js/dataTables/jquery.dataTables.min.js';
import '../../js/dataTables/dataTables.bootstrap.min.js';

export default class AuthorTable extends Component {

    componentDidMount() {
        $('#dataTables').DataTable({
            retrieve: true,
            responsive: true
        });
    }

    render() {
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
    }
}