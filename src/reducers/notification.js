const INITIAL_STATE = { msg: '' };

export function notification(state = INITIAL_STATE, action) {
    if(action.type === 'ALERT'){
        return {...state, msg: action.msg};
    }

    return state;
}