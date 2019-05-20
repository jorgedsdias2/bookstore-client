import {notification, author} from '../actions/actionCreator';

export default class AuthorApi {
    static getAuthors() {
        return dispatch => {
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
                dispatch(author('GET', response.authors));
            }).catch(error => {
                dispatch(notification(error.message));
            });
        }
    }

    static addAuthor(props, nameValue) {
        return dispatch => {
            dispatch(notification(''));

            const request = {
                method: 'POST',
                body: JSON.stringify({name: nameValue}),
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
                props.history.push('/authors');
            }).catch(error => {
                dispatch(notification(error.message));
            });
        }
    }
}