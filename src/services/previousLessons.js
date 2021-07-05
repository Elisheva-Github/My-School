export const previousLessonToServer = (id) => {
    debugger
    return fetch(`http://localhost:3000/s_previousLessons?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        }
        )
        .catch((err) => {
            console.log("error", err);
        });

    }
