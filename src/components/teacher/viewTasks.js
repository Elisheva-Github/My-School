import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
// import { previousLessonToServer } from '../../services/previousLessons';

import { getAllStudentsFromServer } from '../../services/getAllStudent';
import {connect, useDispatch} from "react-redux";
import { postMarkToServer } from '../../services/postMark';

const Tasks = (props) => {

  let history = useHistory();
  const [students, setStudents] = useState('');
  const [item, setItem] = useState({});
  const [show, setShow] = useState(false);
  const [mark, setMark] = useState('');
  const [title, setTitle] = useState('');


  useEffect(async () => {

    getAllStudentsFromServer().then((data) => {
      (setStudents(data))

    })
  }, [])

  // .then(data =>{debugger; (setless(data.result))})

  function newMarksAndDiv() {
  
    setShow(true);
  }

 

  function viewMarksAndDiv() {
    
    setShow(false);
    
  }

  const newMarks = async () => {
    // const login = async () => {

    // students = await getAllStudentsFromServer();

    //  }

    console.log("new");
  }

  function viewMarks() {
    console.log("view");
  }

 
  const postMark = async (id, mark, title) => {
let teacherId=props.id;
    let marks = [id, mark];
    let data = await postMarkToServer(teacherId,marks, title);
    console.log("date", data)

  }

  console.log("res", students);

  return (<div>

    <button onClick={() => newMarksAndDiv()}>  הכנס ציון חדש   </button>
    <button onClick={() => viewMarksAndDiv()}>  צפיה בציונים   </button>




      {/* דיב של הכנסת שיעור חדש */}
    <div>
        {show ? <div> 
          
            <input type="text"
          placeholder=" הכנס שעור"
          value={title} onChange={(e) => {
            console.log(e.target.value)
            setTitle(e.target.value)
          }} />
          
          {students && students.map(st => (
            <li>
              {st.firstName}

              {/* <input></input> */}
              <input type="number" min="60" max="100"
                value={mark}
                onChange={(e) => {
                  console.log(e.target.value)
                  setMark(e.target.value)
                }} />

              <button onClick={postMark(st._id, mark, title)}>
                עדכון ציון
              </button>
            </li>
          ))}</div>
          : <div>

             {/* דיב של הצגת ציונים */}
            <div id="divViewMark" > :הצגת ציונים
        {students && students.map(st => (
              <li>
                {st.firstName}
              </li>
            ))}
            </div>
          </div>}


      </div>
    </div>
 
  );

 }

// export default Tasks;



const mapStateToProps = (state) => {
  debugger
  return {
    id: state.user?.user?._id,
  };
};
export default connect(mapStateToProps, {})(Tasks);


