export const forgetPassword = (email, password) => {
    fetch('http://localhost:3000/forgetPassword', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
}