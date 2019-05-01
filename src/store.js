import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {notification} from './reducers/notification';

const reducers = combineReducers({notification});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;