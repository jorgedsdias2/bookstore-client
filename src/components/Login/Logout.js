import { Component } from 'react';

export default class Logout extends Component {

    componentWillMount(){
        this.props.history.push('/login');
    }

    render(){
        return null;
    }
}