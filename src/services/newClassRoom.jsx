// export const newLessonToServer=(numLesson, lessonName,file,date,notes,time) => {
//     fetch(`http://localhost:3000/postLesson?numLesson=${numLesson}?lessonName=${lessonName}?file=${file}?date=${date}?notes=${notes}?time=${time}`)
//     .then((res) => res.json())
//     .then((data) =>{ console.log(data);
//            return data;}
//      )
//     .catch((err) => {
//       console.log("error", err);
//     });
// }

export const newLessonToServer=(teacher,numLesson, lessonName,file,date,notes,time) => {
fetch('http://localhost:3000/postLesson/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    teacher:{teacher},
    numLesson: {numLesson},
    lessonName: {lessonName},
    file: {file},
    date: {date},
    notes: {notes},
    time: {time}
  })
});
}