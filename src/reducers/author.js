import {List} from 'immutable';

const INITIAL_STATE = new List();

export function author(state = INITIAL_STATE, action) {
    if(action.type === 'LIST') {
        return new List(action.authors);
    }

    if(action.type === 'FIND') {
        return new List(action.author);
    }

    return state;
}