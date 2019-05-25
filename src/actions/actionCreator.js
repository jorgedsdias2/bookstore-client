export function notification(msg, alert) {
    return {type: 'ALERT', msg, alert};
}

export function listAuthors(authors) {
    return {type: 'LIST', authors};
}