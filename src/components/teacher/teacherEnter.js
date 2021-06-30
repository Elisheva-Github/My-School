import React from 'react';
import { useHistory } from "react-router-dom";
import '../../style/teacher/teacherEnter.css';


const Teachers = () => {
  let history = useHistory();
console.log(history.location.state);
  function viewAttendanceClick() {
    history.replace("/attendance");
  }
  function viewTasksClick() {
    history.replace("/tasks");
  }
  function viewTestsClick() {
    history.replace("/tests");
  }
  function newClassClick() {
    history.replace("/newClassRoom",history.location.state);
  }

  return (<div>
    <img className="teachetImg" src={"/images/teacherBack.png"} />
    <img className="logo" src={"/images/logo.png"} />
    <img className="att" src={"/images/att.png"} />
    {/* <img className="test" src={"/images/test.png"} />
     <img className="hw" src={"/images/hw.png"} />
     <img className="plessons" src={"/images/plessons.png"} /> */}
    <button className="previouslessons" onClick={viewAttendanceClick} >  שיעורים קודמים   </button>
    <button className="test" onClick={viewTasksClick}> צפייה במבחנים  </button>
    <button className="hw" onClick={viewTestsClick}> תרגילים שהוגשו   </button>
    <button className="attendance" onClick={newClassClick}>יצירת שיעור חדש</button>
  </div>

  );
}

export default Teachers;