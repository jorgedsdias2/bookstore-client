import React, { Component } from 'react';
import AuthorTable from './AuthorTable';

export default class AuthorList extends Component {
    render() {
        let showMessage = showMessage(this.props.msg, this.props.alert);

        return (
            <div>
                <AuthorTable 
                    get={this.props.get}
                    showMessage={showMessage}
                />
            </div>
        );
    }
}