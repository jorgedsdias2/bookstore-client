import React, { Component } from 'react';
import {connect} from 'react-redux';

import LoginApi from '../../api/LoginApi';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = { msg:localStorage.getItem('msg') };
        this.send = this.send.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({msg: nextProps.msg});
    }

    send(event) {
        event.preventDefault();
        if(this.props.msg) {
            this.setState({msg: this.props.msg});
        }

        this.props.login(this.props, this.email.value, this.password.value);
    }

    render() {
        let showMessage = '';
        if(this.state.msg) {
            showMessage = 
            <div className="alert alert-warning" role="alert">
                {this.state.msg}
                {/* <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button> */}
            </div>
        }

        return (
            <div>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <div className="login-panel panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Please Sign In</h3>
                            </div>
                            <div className="panel-body">
                                {showMessage}
                                <form onSubmit={this.send}>
                                    <fieldset>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="E-mail" type="email" autoFocus ref={(input) => this.email = input} />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Password" type="password" ref={(input) => this.password = input} />
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value="Remember Me" />Remember Me
                                            </label>
                                        </div>
                                        <input type="submit" className="btn btn-lg btn-success btn-block" value="Login" />
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {msg: state.notification.msg}
};

const mapDispatchToProps = dispatch => {
    return {
        login: (props, emailValue, passwordValue) => {
            dispatch(LoginApi.login(props, emailValue, passwordValue));
        }
    }
};

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps) (LoginForm);

export default LoginFormContainer;