import React from 'react';
import { useHistory } from "react-router-dom";
import '../../style/teacher/teacherEnter.css';
import { connect, useDispatch } from "react-redux";
import { previousLessonToServer } from '../../services/previousLessons';
import Header from '../header';
import Avatar from '@material-ui/core/Avatar';

const Teachers = (props) => {
  let history = useHistory();
  console.log("history.location.state", history.location.state);

  const previouslessonsClick = async () => {

    // let res = '';
    // 
    // // res= await previousLessonToServer(props.userId)
    // res = await previousLessonToServer(props.subject);
    // console.log("resres", res)
    history.push("/previousLessons");
  }

  function viewAttendanceClick() {

    history.push("/attendance");
  }
  function viewTasksClick() {
    history.push("/tasks");
  }
  function viewTestsClick() {
    history.push("/tests");
  }
  function newClassClick() {
    history.push("/newClassRoom", history.location.state);
  }

  return (<div>

    <Avatar>{props.fname && props.fname[0]}</Avatar>
    <Header />
    {/* <div>{props.subject}</div>
    <div>{props.fname}</div> */}
    {/* <img className="teachetImg" src={"/images/teacherBack.png"} />
    <img className="logo" src={"/images/logo.png"} />
    <img className="att" src={"/images/att.png"} /> */}
    {/* <img className="test" src={"/images/test.png"} />
     <img className="hw" src={"/images/hw.png"} />
     <img className="plessons" src={"/images/plessons.png"} /> */}
    {/* <button className="previouslessons" onClick={previouslessonsClick} >ff  שיעורים קודמים   </button>
    <button className="test" onClick={viewTasksClick}>  גליון ציונים  </button>
    <button className="hw" onClick={viewTestsClick}> תרגילים שהוגשו   </button>
    <button className="button" onClick={newClassClick}>יצירת שיעור חדש</button>
    <button className="attendance" onClick={viewAttendanceClick}>צפיה בנוכחות</button> */}
  </div>

  );
}

const mapStateToProps = (state) => {

  return {
    fname: state.user?.user?.firstName,
    subject: state.user?.user?.subject || 'none',
  };
};
// export default connect(mapStateToProps, {})(Login);
export default connect(mapStateToProps, {})(Teachers);
// export default Teachers;