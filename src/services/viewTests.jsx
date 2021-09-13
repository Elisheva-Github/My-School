export const viewTestsFromServer = () => {
    return fetch(`http://localhost:3000/viewTest`)
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
