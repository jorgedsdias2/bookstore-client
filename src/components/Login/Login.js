import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}