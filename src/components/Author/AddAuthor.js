import React, { Component } from 'react';

export default class AddAuthor extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">Add Author</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Author Registration Form
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <form>
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input className="form-control" />
                                                    <p className="help-block"></p>
                                                </div>
                                                <button type="submit" className="btn btn-primary">Submit Button</button>&nbsp;
                                                <button type="reset" className="btn btn-primary">Reset Button</button>
                                            </form>
                                        </div>
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