import React, { Component } from 'react';
import AuthorForm from './AuthorForm';

export default class AuthorEdit extends Component {
    render() {
        let showMessage = showMessage(this.props.msg, this.props.alert);

        return (
            <div>
                <AuthorForm 
                    title="Edit Author"
                    subtitle="Form to edit an author"
                    button="Edit Author"
                    send={this.props.send}
                />
            </div>
        );
    }
}