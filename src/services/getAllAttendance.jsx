
export const getAllAttendanceFromServer = () => {
    return fetch(`http://localhost:3000/allAttendance`)
    .then((res) => res.json())
    .then((data) =>{ 
      return data;
                 }
     )
    .catch((err) => {
      console.log("error", err);
    });
}
