// export const previousLessonToServer = (id) => {
//     
//     return fetch(`http://localhost:3000/s_previousLessons?id=${id}`)
//         .then((res) => res.json())
//         .then((data) => {
//             return data;
//         }
//         )
//         .catch((err) => {
//             console.log("error", err);
//         });

//     }


export const previousLessonToServer = (subject) => {
    // debugger
    return fetch(`http://localhost:3000/s_previousLessons/` + subject)
        .then((res) => res.json())
        .then((data) => {
            return data;
        }
        )
        .catch((err) => {
            console.log("error", err);
        });

}
