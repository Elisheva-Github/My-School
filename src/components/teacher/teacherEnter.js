import React from 'react';
import { useHistory } from "react-router-dom";
import '../../style/teacher/teacherEnter.css';
import { connect, useDispatch } from "react-redux";

const Teachers = (props) => {
  let history = useHistory();
  console.log(history.location.state);

  const previouslessonsClick = async () => {
    // let res = '';
    // // res= await previousLessonToServer(props.userId)
    // res = await previousLessonToServer();
    // console.log("res", res)
    // history.replace("previousLessons", { res });
  }

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
    history.replace("/newClassRoom", history.location.state);
  }

  return (<div>
    <div>{props.subject}</div>
    <div>{props.fname}</div>
    <img className="teachetImg" src={"/images/teacherBack.png"} />
    <img className="logo" src={"/images/logo.png"} />
    <img className="att" src={"/images/att.png"} />
    {/* <img className="test" src={"/images/test.png"} />
     <img className="hw" src={"/images/hw.png"} />
     <img className="plessons" src={"/images/plessons.png"} /> */}
    <button className="previouslessons" onClick={previouslessonsClick} >  שיעורים קודמים   </button>
    <button className="test" onClick={viewTasksClick}>  גליון ציונים  </button>
    <button className="hw" onClick={viewTestsClick}> תרגילים שהוגשו   </button>
    <button className="button" onClick={newClassClick}>יצירת שיעור חדש</button>
    <button className="attendance" onClick={viewAttendanceClick}>צפיה בנוכחות</button>
  </div>

  );
}

const mapStateToProps = (state) => {
  debugger
  return {
    fname: state.user?.user?.firstName,
    subject: state.user?.user?.subject,
  };
};
// export default connect(mapStateToProps, {})(Login);
export default connect(mapStateToProps, {})(Teachers);
// export default Teachers;