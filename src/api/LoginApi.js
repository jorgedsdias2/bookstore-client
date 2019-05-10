import {notification} from '../actions/actionCreator';

export default class LoginApi {
    static login(props, emailValue, passwordValue) {
        return dispatch => {
            const request = {
                method: 'POST',
                body: JSON.stringify({email:emailValue, password:passwordValue}),
                headers: new Headers({
                    'Content-type': 'application/json'
                })
            };
    
            fetch('http://localhost:3000/api/auth/login', request).then(response => {
                if(response.ok) {
                    dispatch(notification(''));
                    return response.json();
                } else {
                    throw new Error('Invalid Login. Please try again!');
                }
            }).then(response => {
                localStorage.setItem('x-access-token', response.token);
                props.history.push('/');
            }).catch(error => {
                dispatch(notification(error.message));
            });
        }
    }
}