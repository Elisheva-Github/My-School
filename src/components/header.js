
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { previousLessonToServer } from '../services/previousLessons';
import '../style/header.css';



const Header = (props) => {
  const history = useHistory();


  const previouslessonsClick = async () => {
    let res = '';
    res = await previousLessonToServer(props.userId)
    res = await previousLessonToServer();
    console.log("res", res)
    history.push("previousLessons", { res });
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
  function viewHwClick() {
    history.push("/hw");
  }
  function newClassClick() {
    history.push("/newClassRoom", history.location.state);
  }

  return (<div>
    <div class="menu">
      <img className="menu-logo " src={"/images/logo.png"} />
      {/* <img className="menu-icon" src={"/images/att.png"} />
    <img className="menu-icon2" src={"/images/att.png"} />
    <img className="menu-icon3" src={"/images/att.png"} />
    <img className="menu-icon4" src={"/images/att.png"} /> */}

      {/* <img className="logo" src={"/images/logo.png"} />
    <img className="att" src={"/images/att.png"} />
    <img className="menu-btn " src={"/images/‏‏logo.png"} /> */}
      <button className="menu-btn " onClick={previouslessonsClick}  > שיעורים קודמים </button>
      {/* <button className="menu-btn" onClick={viewTasksClick}>  גליון ציונים  </button> */}
      <button className="menu-btn" onClick={viewTestsClick}> מבחנים   </button>
      <button className="menu-btn" onClick={viewHwClick}> תרגילים שהוגשו   </button>
      <button className="menu-btn" onClick={newClassClick}>יצירת שיעור חדש </button>
      <button className="menu-btn" onClick={viewAttendanceClick}>צפיה בנוכחות </button>
      <div></div>





    </div>
  </div>
  );

}


export default Header;
