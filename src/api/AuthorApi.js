import {notification, listAuthors} from '../actions/actionCreator';

export default class AuthorApi {
    static listAuthors() {
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
                dispatch(listAuthors(response.authors));
            }).catch(error => {
                dispatch(notification(error.message, 'error'));
            });
        }
    }

    static updateAuthor(props, idValue, nameValue) {
        return dispatch => {
            dispatch(notification(''));

            const request = {
                method: 'PUT',
                body: JSON.stringify({name:nameValue}),
                headers: new Headers({
                    'Content-type': 'application/json',
                    'x-access-token': localStorage.getItem('x-access-token')
                })
            };
    
            fetch(`http://localhost:3000/api/authors/author/${idValue}`, request).then(response => {
                if(response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error editing author!');
                }
            }).then(response => {
                dispatch(notification(response.message, 'success'));
                props.history.push('/authors');
            }).catch(error => {
                dispatch(notification(error.message, 'error'));
            });
        }
    }
}