
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { previousLessonToServer } from '../services/previousLessons';

import '../style/homePage.css';



const Header = (props) => {
    const history = useHistory();


    const previouslessonsClick = async () => {
        let res = '';
        res= await previousLessonToServer(props.userId)
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
      function newClassClick() {
        history.push("/newClassRoom", history.location.state);
      }
    

   
    return (<div class="menu">
    <button className="menu-btn" onClick={previouslessonsClick} >  שיעורים קודמים   </button>
    <button className="menu-btn" onClick={viewTasksClick}>  גליון ציונים  </button>
    <button className="menu-btn" onClick={viewTestsClick}> תרגילים שהוגשו   </button>
    <button className="menu-btn" onClick={newClassClick}>יצירת שיעור חדש</button>
    <button className="menu-btn" onClick={viewAttendanceClick}>צפיה בנוכחות</button>
    </div>
    );

}


export default Header;
