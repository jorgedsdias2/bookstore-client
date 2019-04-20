import React, { Component } from 'react';

export default class FormLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {msg:''};
    }

    send(event) {
        event.preventDefault();

        const request = {
            method: 'POST',
            body: JSON.stringify({email:this.email.value,password:this.password.value}),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        };

        fetch('http://localhost:3000/api/auth/login', request).then(response => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error('Invalid Login. Please try again!');
            }
        }).then(response => {
            localStorage.setItem('x-access-token', response.token);
            this.props.history.push('/');
        }).catch(error => {
            this.setState({msg: error.message});
        });
    }

    render() {
        let showMessage = '';
        if(this.state.msg) {
            showMessage = 
            <div className="alert alert-warning" role="alert">
                {this.state.msg}
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
                                <form onSubmit={this.send.bind(this)}>
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