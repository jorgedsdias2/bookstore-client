const INITIAL_STATE = { msg: '' };

export function notification(state = INITIAL_STATE, action) {
    if(action.type === 'ALERT'){
        return action.msg;
    }

    return state;
}