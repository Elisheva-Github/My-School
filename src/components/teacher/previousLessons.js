import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import Header from '../header';
import Avatar from '@material-ui/core/Avatar';
import { previousLessonToServer } from '../../services/previousLessons';
import '../../style/student/s_previousLessons.css';


const PreviousLessons = (props) => {
  // 
  let history = useHistory();
  const [lesss, setless] = useState([]);
  // const res = history.location.state ? history.location.state.res : [];
  useEffect(() => previousLessonToServer(props.subject).then(res => setless(res)).catch(err => alert(err)), [])


  function newLesson() {
    history.push("/newLesson");
  }
  function goToHw(id) {

    history.push({ pathname: "/newHw", state: { id: id } });
  }

  // useEffect(() => setless(res), []);
  //   useEffect(() => setless(res22),[])
  console.log("less", { lesss })

  return (
    <div>
      <Avatar>{props.fname && props.fname[0]}</Avatar>
      <Header />
      <div className="table">
        <div class="pageTitle">
    שיעורים קודמים:
        </div>
        <br />
        <table>
          <thead>
            <tr class="title">
              <td class="td2">מס שעור</td>
              <td class="td2">  שם שעור</td>
              <td class="td3">  תאריך </td>
              <td class="td4">  הערה </td>
              <td class="td2">  שעה </td>
            </tr>
          </thead>
          {lesss.map(herLess => (
            <tr>
              <td class="td2"> {herLess?.numLesson}</td>
              <td class="td2"> {herLess?.lessonName}</td>
              {/* <td> {herLess?.file}</td> */}
              <td class="td3"> {herLess?.date.slice(0,10)}</td>
              <td class="td4"> {herLess?.notes}</td>
              <td class="td2"> {herLess?.time}</td>
              {/* {  <button onClick={()=>goToHw(herLess._id)}>שעורי בית להכניס  </button>} */}
              {<button className="sendBtn" onClick={() => goToHw(herLess.numLesson)}>ש.ב להכניס  </button>}
            </tr>
          ))}
        </table>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {

  return {

    userId: state.user?.user?.id,
    fname: state.user?.user?.firstName,
    subject: state.user?.user?.subject,
  };
};

export default connect(mapStateToProps, {})(PreviousLessons);