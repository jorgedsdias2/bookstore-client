import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router";

import AuthorApi from '../../api/AuthorApi';

export class AuthorForm extends Component {

    constructor(props) {
        super(props);
        if(this.props.match.params.id) {
            this.state = {id:this.props.match.params.id, msg:'', alert:''};
        } else {
            this.state = {id:undefined, msg:'', alert:''};
        }

        this.send = this.send.bind(this);
    }

    componentDidMount() {
        if(this.state.id) {
            const author = this.props.authors.find(author => author._id === this.state.id);
            this.name.value = author.name;
        }
    }

    send(event) {
        event.preventDefault();

        if(this.state.id) {
            this.props.updateAuthor(this.props, this.state.id, this.name.value);
        } else {
            console.log('Adicionando');
        }
    }

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
                                            <form onSubmit={this.send}>
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

const mapStateToProps = state => {
    return {
        authors: state.author,
        msg: state.notification.msg,
        alert: state.notification.alert
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateAuthor: (props, idValue, nameValue) => {
            dispatch(AuthorApi.updateAuthor(props, idValue, nameValue));
        }
    }
};

const AuthorFormContainer = withRouter(connect(mapStateToProps, mapDispatchToProps) (AuthorForm));
export default AuthorFormContainer;