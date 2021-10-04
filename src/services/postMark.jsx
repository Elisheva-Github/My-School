export const postMarkToServer = (teacherId, marks, lessonId) => {
  fetch('http://localhost:3000/postMark', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      teacherId,
      marks,
      lessonId
    })
  });
}

export const postMyHwFileToServer = (lessonId,studentId, file) => {
  fetch('http://localhost:3000/postFile', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      lessonId,
      studentId,
      file,
    })
  });
}