
export const getAllStudentsFromServer = (subject) => {
    return fetch(`http://localhost:3000/allStudents?subject=${subject}`, {
      // credentials: "include"
    })
    .then((res) => res.json())
    .then((data) =>{ 
      return data;
                 }
     )
    .catch((err) => {
      console.log("error", err);
    });
}
