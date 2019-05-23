import React, { Component } from 'react';

import $ from 'jquery';

// css import
import './css/bootstrap.min.css';
import './css/metisMenu.min.css';
import './css/startmin.css';
import './css/font-awesome.min.css';

// js import
import './js/bootstrap.min.js';
import './js/metisMenu.min.js';
import './js/startmin.js';

import Menu from './components/Menu';

class App extends Component {
    componentDidMount() {
        $('#side-menu').metisMenu();
    }

    componentDidUpdate() {
        $('#side-menu').metisMenu();
    }

    isLoggedIn(props) {
        if(localStorage.getItem('x-access-token') === null) {
            props.children.props.history.replace('/login', {msg: 'You can\'t access this address'});
            return false;
        } else {
            return true;
        }
    }

    render() {
        const isLoggedIn = this.isLoggedIn(this.props);
        return (
            <div id="root">
                { isLoggedIn &&
                    <div id="wrapper">
                        <Menu />
                        <div id="page-wrapper">
                            {this.props.children}
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default App;