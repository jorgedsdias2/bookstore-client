const INITIAL_STATE = { authors: '' };

export function author(state = INITIAL_STATE, action) {
    if(action.type === 'GET') {
        return {...state, authors: action.authors};
    }

    return state;
}