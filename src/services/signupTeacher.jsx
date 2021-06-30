export const signupTeacherToServer=(subject,firstName, lastName, id, email, password) => {
    fetch('http://localhost:3000/signupTeacher', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        subject,
        firstName,
        lastName,
        id,
        email,
        password
      })
    });
    }
