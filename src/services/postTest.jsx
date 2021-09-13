// export const postTestToServer = (nameSubject, date, file, title) => {
//     fetch('http://localhost:3000/postTest', {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             nameSubject,
//             date,
//             file,
//             title
//         })
//     });
// } 

export const postTestToServer = (data) => {
    fetch('http://localhost:3000/postTest', {
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