import React, { Component } from 'react';

export default class AuthorAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {msg:'', alert:''};
    }

    send(event) {
        event.preventDefault();

        this.setState({msg: ''});

        const request = {
            method: 'POST',
            body: JSON.stringify({name:this.name.value}),
            headers: new Headers({
                'Content-type': 'application/json',
                'x-access-token': localStorage.getItem('x-access-token')
            })
        };

        fetch('http://localhost:3000/api/authors/author', request).then(response => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error('Error adding author!');
            }
        }).then(response => {
            this.props.history.push('/authors');
        }).catch(error => {
            this.setState({msg: error.message, alert: 'danger'});
        });
    }

    render() {
        let showMessage = '';
        if(this.state.msg) {
            showMessage =
            <div className={`alert alert-${this.state.alert}`} role="alert">
                {this.state.msg}
            </div>
        }

        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">Add Author</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Form to add an author
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            {showMessage}
                                            <form onSubmit={this.send.bind(this)}>
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input className="form-control" placeholder="Name" type="text" ref={(input) => this.name = input} />
                                                    <p className="help-block"></p>
                                                </div>
                                                <button type="submit" className="btn btn-primary">Add Author</button>&nbsp;
                                                <button type="reset" className="btn btn-primary">Clear Fields</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        );
    }
}