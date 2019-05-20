import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {notification} from './reducers/notification';
import {author} from './reducers/author';

const reducers = combineReducers({notification, author});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;