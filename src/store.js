import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reduxMulti from 'redux-multi';

import {notification} from './reducers/notification';
import {authors} from './reducers/authors';

const reducers = combineReducers({notification, authors});
const store = createStore(reducers, applyMiddleware(reduxMulti, thunkMiddleware));

export default store;