import React, { Component } from 'react';

import DashboardCard from './DashboardCard';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">Dashboard</h1>
                        </div>
                    </div>
                    <div className="row">
                        <DashboardCard
                            name="Authors"
                            icon="edit"
                            color="primary"
                            amount="10"
                            url="authors"
                        />
                        <DashboardCard
                            name="Users"
                            icon="users"
                            color="green" 
                            amount="3"
                            url="users"
                        />
                    </div>
                </div>
            </div>
        );
    }
}