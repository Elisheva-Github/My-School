export const postHwToServer = (data) => {
    debugger
    return fetch('http://localhost:3000/postHw', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...data
        })
    });
}