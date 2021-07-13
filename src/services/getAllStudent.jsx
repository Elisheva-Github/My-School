
export const getAllStudentsFromServer = () => {
    return fetch(`http://localhost:3000/allStudent`)
    .then((res) => res.json())
    .then((data) =>{ 
      return data;
                 }
     )
    .catch((err) => {
      console.log("error", err);
    });
}
