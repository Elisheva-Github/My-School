export const previousLessonToServer = (student="elisheva92121@gmail.com") => {
    return fetch(`http://localhost:3000/s_previousLessons/${student}`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        }
        )
        .catch((err) => {
            console.log("error", err);
        });

    }
