import React, { Component } from 'react';
import AuthorForm from './AuthorForm';

export default class AuthorAdd extends Component {
    render() {
        let showMessage = showMessage(this.props.msg, this.props.alert);

        return (
            <div>
                <AuthorForm 
                    title="Add Author"
                    subtitle="Form to add an author"
                    button="Add Author"
                    send={this.props.send}
                />
            </div>
        );
    }
}