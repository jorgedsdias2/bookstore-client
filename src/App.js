import React, { Component } from 'react';

import {notification} from '../src/actions/actionCreator';

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
        if(localStorage.getItem('x-access-token') === null) {
            notification('You can\'t access this address');
            this.props.children.props.history.replace('/login');
        }

        $('#side-menu').metisMenu();
    }

    componentDidUpdate() {
        $('#side-menu').metisMenu();
    }

    render() {
        if(localStorage.getItem('x-access-token') === null) {
            return null;
        } else {
            return (
                <div id="root">
                    <div id="wrapper">
                        <Menu />
                        <div id="page-wrapper">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default App;