import React from 'react';
import { useHistory } from "react-router-dom";
import { attendanceToServer } from '../../services/attendance'
import { connect, useDispatch } from "react-redux";
import { previousLessonToServer } from '../../services/previousLessons';

import Avatar from '@material-ui/core/Avatar';



const Students = (props) => {

  let history = useHistory();
  // let b=props.fname;
  // let aa=b.slice(0,2);

  const previouslessonsClick = async () => {
    let res = '';
    // res= await previousLessonToServer(props.userId)
    res = await previousLessonToServer();
    console.log("res", res)
    history.push("s_previouslessons", { res });
  }

  function marksClick() {
    history.push("/s_marks");
  }

  function hwClick() {
    // history.replace("/s_hw");
  }
  function scheduleClick() {
    history.push("/s_schedule");
  }
  function testClick() {
    history.push("/s_test");
  }

  const enterLessonClick = async () => {
    let d = new Date();
    try {

      const res = await attendanceToServer(d, props.userId, props.sub);
      console.log(res);
      alert("ברישום בוצע בהצלחה!! ברוכים הבאים לבית סיפרנו!!!!😊😊")
      history.push("/zoom");
    }
    catch (error) {
      alert("הרישום נכשל😒");
    }
  
  }

  return (
    <div>
      <h1>
        
        <Avatar>{props.fname}</Avatar>
        {/* <Avatar>{aa}</Avatar> */}
      </h1>
      <div>
        <img className="logo" src={"/images/logo.png"} />
      </div>
      <button className="previouslessons" onClick={previouslessonsClick} >  שיעורים קודמים   </button>
      <button className="test" onClick={marksClick}> צפיה בציונים   </button>
      <button className="hw" onClick={hwClick}> תרגילים שהוגשו   </button>
      <button className="schedule" onClick={scheduleClick}>  מערכת שעות   </button>
      <button className="test" onClick={testClick}>  מבחנים  </button>
      <button onClick={enterLessonClick}>  כניסה לשיעור  </button>
      {/* <h1>fname: {props.fname}</h1> */}



    </div>
  );
}
const mapStateToProps = (state) => {
  
  return {
    userId: state.user?.user?.id,
    fname: state.user?.user?.firstName,
    sub: state.user?.user?.subject,
  };
};
// export default connect(mapStateToProps, {})(Login);
export default connect(mapStateToProps, {})(Students);

// export default Students;