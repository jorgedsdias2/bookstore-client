import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router";

import AuthorApi from '../../api/AuthorApi';

export class AuthorForm extends Component {

    constructor(props) {
        super(props);
        const author = {_id: '', name: ''};
        if(this.props.match.params.id) {
            this.state = {id:this.props.match.params.id, msg:'', alert:'', author:author};
        } else {
            this.state = {id:undefined, msg:'', alert:'', author:author};
        }

        this.send = this.send.bind(this);
    }

    componentWillMount() {
        if(this.state.id) {
            const author = this.props.authors.find(author => author._id === this.state.id);
            this.setState({author: author});
        }
    }

    componentDidMount() {
        if(this.state.id) {
            this.name.value = this.state.author.name;
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.msg) {
            this.setState({msg: nextProps.msg, alert: nextProps.alert});
        }
    }

    send(event) {
        event.preventDefault();
        const author = this.state.author;
        author.name = this.name.value;
        this.setState({author: author});
        if(this.state.id) {
            this.props.updateAuthor(this.props, this.state.author);
        } else {
            this.props.addAuthor(this.props, this.state.author);
        }
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
                                            {showMessage}
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
        authors: state.authors,
        msg: state.notification.msg,
        alert: state.notification.alert
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addAuthor: (props, author) => {
            dispatch(AuthorApi.addAuthor(props, author));
        },
        updateAuthor: (props, author) => {
            dispatch(AuthorApi.updateAuthor(props, author));
        }
    }
};

const AuthorFormContainer = withRouter(connect(mapStateToProps, mapDispatchToProps) (AuthorForm));
export default AuthorFormContainer;