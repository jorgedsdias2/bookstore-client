import React, { Component } from 'react';
import AuthorAdd from './AuthorAdd';
import AuthorEdit from './AuthorEdit';
import AuthorList from './AuthorList';

export function showMessage(msg, alert) {
    let showMessage = '';
    if(msg) {
        showMessage =
        <div className={`alert alert-${alert}`} role="alert">
            {msg}
        </div>
    }

    return showMessage;
}

export class AuthorBox extends Component {

    constructor(props) {
        super(props);
        this.state = {msg:'', alert:''};
        this.send = this.send.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({msg: nextProps.msg, alert: nextProps.alert});
    }

    get() {
        this.props.getAuthors(this.props);
    }

    send(event) {
        event.preventDefault();
        this.props.sendAuthor(this.props, this.name);
    }

    edit(event) {
        event.preventDefault();
        this.props.editAuthor(this.props, this.id);
    }

    render() {
        return (
            <div>
                <AuthorAdd 
                    send={this.send}
                    msg={this.state.msg}
                    alert={this.state.alert}
                />
                <AuthorEdit
                    send={this.send}
                    msg={this.state.msg}
                    alert={this.state.alert}
                />
                <AuthorList
                    get={this.get}
                    msg={this.state.msg}
                    alert={this.state.alert}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        authors: state.authos,
        msg: state.notification.msg,
        alert: state.notification.alert
    }
};

const mapDispatchToProps = dispatch => {
    return {
        sendAuthor: (props, nameValue) => {
            dispatch(AuthorApi.sendAuthor(props, nameValue));
        },
        editAuthor: (props, idValue) => {
            dispatch(AuthorApi.editAuthor(props, idValue));
        },
        getAuthors: (props) => {
            dispatch(AuthorApi.getAuthors(props));
        }
    }
};

const AuthorBoxContainer = connect(mapStateToProps,mapDispatchToProps)(AuthorBox);

export default AuthorBoxContainer;