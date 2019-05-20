export function notification(msg) {
    return {type: 'ALERT', msg};
}

export function author(type, authors) {
    if(type === 'GET') {
        return {type: 'GET', authors};
    }
}