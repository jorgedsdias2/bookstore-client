import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="navbar-header">
                        <Link to="" className="navbar-brand" href="index.html">Bookstore</Link>
                    </div>

                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <ul className="nav navbar-nav navbar-left navbar-top-links">
                        <li><Link to="#"><i className="fa fa-home fa-fw"></i> Website</Link></li>
                    </ul>

                    <ul className="nav navbar-right navbar-top-links">
                        <li className="dropdown">
                            <Link to="" className="dropdown-toggle" data-toggle="dropdown" href="#">
                                <i className="fa fa-user fa-fw"></i> secondtruth <b className="caret"></b>
                            </Link>
                            <ul className="dropdown-menu dropdown-user">
                                <li><Link to="#"><i className="fa fa-user fa-fw"></i> User Profile</Link>
                                </li>
                                <li><Link to="#"><i className="fa fa-gear fa-fw"></i> Settings</Link>
                                </li>
                                <li className="divider"></li>
                                <li><Link to="/logout"><i className="fa fa-sign-out fa-fw"></i> Logout</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div className="navbar-default sidebar" role="navigation">
                        <div className="sidebar-nav navbar-collapse">
                            <ul className="nav" id="side-menu">
                                <li className="sidebar-search">
                                    <div className="input-group custom-search-form">
                                    <input type="text" className="form-control" placeholder="Search..." />
                                    <span className="input-group-btn">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                    </span> 
                                    </div>
                                </li>
                                <li>
                                    <Link to="/" className="active"><i className="fa fa-dashboard fa-fw"></i> Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fa fa-edit fa-fw"></i> Authors<span className="fa arrow"></span></Link>
                                    <ul className="nav nav-second-level">
                                    <li>
                                        <Link to="/authors">List Authors</Link>
                                    </li>
                                    <li>
                                        <Link to="/authors/add">Add Author</Link>
                                    </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="#"><i className="fa fa-users fa-fw"></i> Users<span className="fa arrow"></span></Link>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to="/users">List Users</Link>
                                        </li>
                                        <li>
                                            <Link to="/users/add">Add User</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}