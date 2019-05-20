import React, { Component } from 'react';

export default class AuthorForm extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">{this.props.title}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    {this.props.subtitle}
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            {this.props.showMessage}
                                            <form onSubmit={this.props.send}>
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input className="form-control" placeholder="Name" type="text" ref={(input) => this.name = input} />
                                                    <p className="help-block"></p>
                                                </div>
                                                <button type="submit" className="btn btn-primary">{this.props.button}</button>&nbsp;
                                                <button type="reset" className="btn btn-primary">Clear Fields</button>
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