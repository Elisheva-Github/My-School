export const attendanceToServer=(firstName,date) => {
    fetch('http://localhost:3000/attendance', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        date
      })
    });
    }