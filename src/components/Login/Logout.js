import { Component } from 'react';

export default class Logout extends Component {

    componentWillMount() {
        localStorage.removeItem('x-access-token');
        this.props.history.push('/login', {msg: ''});
    }

    render() {
        return null;
    }
}