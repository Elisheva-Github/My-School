export const viewTestsFromServer = (subject) => {
    return fetch(`http://localhost:3000/allTests?subject=${subject}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            return data;
        }
        )
        .catch((err) => {
            console.log("error", err);
        });
}

export const viewMyTestsFromServer = (subject,id ) => {
    return fetch(`http://localhost:3000/myTests?subject=${subject}&id=${id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            return data;
        }
        )
        .catch((err) => {
            console.log("error", err);
        });
}
