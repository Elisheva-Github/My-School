
export const getAllLessonsFromServer = () => {
    return fetch(`http://localhost:3000/allLessons`)
    .then((res) => res.json())
    .then((data) =>{ 
      return data;
                 }
     )
    .catch((err) => {
      console.log("error", err);
    });
}
