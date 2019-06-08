import {notification, listAuthors, deleteAuthor} from '../actions/actionCreator';

export default class AuthorApi {
    static listAuthors() {
        return dispatch => {
            dispatch(notification(''));

            const request = {
                method: 'GET',
                headers: new Headers({
                    'Content-type': 'application/json',
                    'x-access-token': localStorage.getItem('x-access-token')
                })
            };
    
            fetch('http://localhost:3000/api/authors', request).then(response => {
                if(response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error listing authors!');
                }
            }).then(response => {
                dispatch(listAuthors(response.authors));
            }).catch(error => {
                dispatch(notification(error.message, 'danger'));
            });
        }
    }

    static addAuthor(props, author) {
        return dispatch => {
            const request = {
                method: 'POST',
                body: JSON.stringify({name:author.name}),
                headers: new Headers({
                    'Content-type': 'application/json',
                    'x-access-token': localStorage.getItem('x-access-token')
                })
            };
    
            fetch(`http://localhost:3000/api/authors/author`, request).then(response => {
                if(response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error adding author!');
                }
            }).then(response => {
                props.history.push('/authors', {msg: response.message, alert: 'success'});
            }).catch(error => {
                dispatch(notification(error.message, 'danger'));
            });
        }
    }

    static updateAuthor(props, author) {
        return dispatch => {
            const request = {
                method: 'PUT',
                body: JSON.stringify({name:author.name}),
                headers: new Headers({
                    'Content-type': 'application/json',
                    'x-access-token': localStorage.getItem('x-access-token')
                })
            };
    
            fetch(`http://localhost:3000/api/authors/author/${author._id}`, request).then(response => {
                if(response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error updating author!');
                }
            }).then(response => {
                props.history.push('/authors', {msg: response.message, alert: 'success'});
            }).catch(error => {
                dispatch(notification(error.message, 'danger'));
            });
        }
    }

    static removeAuthor(id) {
        return dispatch => {
            const request = {
                method: 'DELETE',
                headers: new Headers({
                    'Content-type': 'application/json',
                    'x-access-token': localStorage.getItem('x-access-token')
                })
            };
    
            fetch(`http://localhost:3000/api/authors/author/${id}`, request).then(response => {
                if(response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error deleting author!');
                }
            }).then(response => {
                dispatch([
                    notification(response.message, 'success'),
                    deleteAuthor(id)
                ]);
            }).catch(error => {
                dispatch(notification(error.message, 'danger'));
            });
        }
    }
}