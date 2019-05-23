export function notification(msg) {
    localStorage.setItem('msg', msg);
    return {type: 'ALERT', msg};
}

export function author(type, authors) {
    if(type === 'GET') {
        return {type: 'GET', authors};
    }
}