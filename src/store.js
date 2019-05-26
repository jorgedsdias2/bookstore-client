import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {notification} from './reducers/notification';
import {authors} from './reducers/authors';

const reducers = combineReducers({notification, authors});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;