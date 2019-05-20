import React, { Component } from 'react';

import AuthorForm from './AuthorForm';

export default class AuthorAdd extends Component {
    render() {
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