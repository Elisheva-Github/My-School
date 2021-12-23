export const postMarkToServer = (type, marks, lessonId) => {
  fetch('http://localhost:3000/postMark', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      type,
      marks,
      lessonId
    })
  });
}

export const postMyFileToServer = (data) => {
  // debugger
  fetch('http://localhost:3000/postFile', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...data
    })
  });
}

// export const postMyFileToServer = (type, lessonId,studentId, file) => {
//   debugger
//   fetch('http://localhost:3000/postFile', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       type,
//       lessonId,
//       studentId,
//       file,
//     })
//   });
// }


// export const postMyTestFileToServer = (lessonId,studentId, file) => {
//   fetch('http://localhost:3000/postFile', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       lessonId,
//       studentId,
//       file,
//     })
//   });
// }