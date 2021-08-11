export const mailToServer = (email,firstName) => {
    fetch('http://localhost:3000/mail', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

            email,
            firstName

        })
    });
}