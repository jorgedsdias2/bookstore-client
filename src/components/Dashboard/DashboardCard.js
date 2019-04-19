import React, { Component } from 'react';

export default class DashboardCard extends Component {
    render() {
        return (
            <div>
                <div className="col-lg-3 col-md-6">
                    <div className={`panel panel-${this.props.color}`}>
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className={`fa fa-${this.props.icon} fa-5x`}></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">{this.props.amount}</div>
                                    <div>{this.props.name}</div>
                                </div>
                            </div>
                        </div>
                        <a href={this.props.url}>
                            <div className="panel-footer">
                                <span className="pull-left">View Details</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}