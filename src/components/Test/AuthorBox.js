import React, { Component } from 'react';
import {connect} from 'react-redux';

import AuthorList from './AuthorList';
import AuthorAdd from './AuthorAdd';
import AuthorApi from '../../api/AuthorApi';

export class AuthorBox extends Component {

    constructor(props) {
        super(props);
        this.state = {msg:'', alert:''};
        this.addAuthor = this.addAuthor.bind(this);
    }

    componentDidMount() {
        if(this.props.match.path === '/authors') {
            this.props.getAuthors();
        }
    }

    showListAuthors(props, showMessage) {
        if(props.authors) {
            return (
                <div>
                    <AuthorList
                        authors={props.authors}
                        showMessage={showMessage}
                    />
                </div>
            );
        } else {
            return null;
        }
    }

    showAddAuthors(props) {
        return (
            <div>
                <AuthorAdd 
                    send={this.addAuthor}
                />
            </div>
        );
    }

    addAuthor(event) {
        event.preventDefault();
        this.props.addAuthor(this.props);
    }

    render() {
        let showMessage = '';
        if(this.props.msg) {
            showMessage = 
            <div className={`alert alert-${this.props.alert}`} role="alert">
                {this.props.msg}
            </div>
        }

        if(this.props.match.path === '/authors') {
            return this.showListAuthors(this.props, showMessage);
        } else if(this.props.match.path === '/authors/add') {
            return this.showAddAuthors(this.props);
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
        },
        addAuthor: (props) => {
            dispatch(AuthorApi.addAuthor(props));
        }
    }
};

const AuthorBoxContainer = connect(mapStateToProps, mapDispatchToProps)(AuthorBox);

export default AuthorBoxContainer;