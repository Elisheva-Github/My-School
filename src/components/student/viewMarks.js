import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import HeaderS from '../headerS';
import { getAllLessonsFromServer } from '../../services/getAllLessons';
import { viewMyTestsFromServer } from '../../services/viewTests';
import '../../style/student/s_previousLessons.css';

const ViewMarks = (props) => {

  const [lessons, setLessons] = useState([]);
  const [tests, setTests] = useState([]);


  useEffect(async () => {
    getAllLessonsFromServer(props.subject).then((data) => {
      setLessons(data);
      console.log("getAllLessonsFromServer", lessons);
    })
  }, [])

  useEffect(async () => {
    viewMyTestsFromServer(props.subject, props.id).then((data) => {
      setTests(data);
      console.log("viewMyTestsFromServer", data);
    })
  }, [])

  return (<div>
    <Avatar>{props.fname && props.fname[0]}</Avatar>
    <HeaderS />

    <div className="table">
      <div className="pageTitle">ציונים מהחודש האחרון:</div>
      <table>
        <tr class="title">
          <td>שם שעור </td>
          <td>ציון</td>
        </tr>

        {tests?.map(t => (
          <tr>
            <td class="td2">   {t?.nameSubject}</td>
            {t['marks']?.filter((n) => n.studentId === props.id).map(a => (
              <>
                <td class="td2"> {a?.mark}</td>
              </>)
            )}
          </tr>
        ))}
      </table>
    </div >
  </div>
  )
}
// cars.filter((item) => item.country === 'Germany');
const mapStateToProps = (state) => {
  return {
    id: state.user?.user?._id,
    fname: state.user?.user?.firstName,
    subject: state.user?.user?.subject,
  };
};
export default connect(mapStateToProps, {})(ViewMarks);


