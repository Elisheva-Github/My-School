import React from 'react';
import { useHistory } from "react-router-dom";
import { attendanceToServer } from '../../services/attendance'
import { connect, useDispatch } from "react-redux";
import { previousLessonToServer } from '../../services/previousLessons';
import HeaderS from '../headerS';

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
      <Avatar>{props.fname && props.fname[0]}</Avatar>
      <HeaderS />

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