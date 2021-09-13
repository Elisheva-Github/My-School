
export const getAllScheduleFromServer = () => {
    return fetch(`http://localhost:3000/allSchedule`)
    .then((res) => res.json())
    .then((data) =>{ 
      return data;
                 }
     )
    .catch((err) => {
      console.log("error", err);
    });
}
