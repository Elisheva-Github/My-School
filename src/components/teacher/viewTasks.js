import React, { useState, useEffect } from 'react';
import Header from '../header';
import { getAllStudentsFromServer } from '../../services/getAllStudent';
import { viewTestsFromServer } from '../../services/viewTests';
import { getAllLessonsFromServer } from '../../services/getAllLessons';
import { getAllMarksFromServer } from '../../services/getAllMarks';
import { connect } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import MarkToUpdate from './markToUpdate';

const Tasks = (props) => {

  const [students, setStudents] = useState('');
  const [item, setItem] = useState({});
  const [show, setShow] = useState(false);
  const [mark, setMark] = useState('');
  const [title, setTitle] = useState('');
  let res = "";
  let res2 = "";

  const [lessons, setLessons] = useState("");
  const [lessHw, setLessHw] = useState('');
  const [marks, setMarks] = useState([]);
  const [tests, setTests] = useState([]);
  const [ts, setTs] = useState([]);

  useEffect(async () => {
    getAllStudentsFromServer(props.subject).then((data) => {
      (setStudents(data))
      console.log("getAllStudentsFromServer", students);
    })
  }, [])

  useEffect(async () => {
    viewTestsFromServer(props.subject).then((data) => {
      setTests(data);
      console.log("viewTestsFromServer", tests);
    })
  }, [])
  useEffect(async () => {
    getAllLessonsFromServer(props.subject).then((data) => {
      setLessons(data);
      console.log("getAllLessonsFromServer", lessons);
    })
  }, [])



    // useEffect(async () => {
    //   
    //   getAllMarksFromServer(props.subject).then((data) => {
    //     (setMarks(data))
    //   })
    // }, [])

    //  useEffect(async () => {
    //   getAllLessonsFromServer().then((data) => {
    //     (setLessons(data))
    //   })
    // }, [])

    // ----------------------------------------------------------------

    // const getAllLessons = async () => {
    //   try {
    //     res = await getAllLessonsFromServer();
    //     console.log("----getAllLessons----", res);
    //     setLessons(res);
    //   }
    //   catch (error) {
    //     console.log("error", error);
    //     alert(" נכשל😒");
    //   }
    // }
    // ----------------------------------------------------------------

    // .then(data =>{; (setless(data.result))})


    // ----------------------------------------------------------------
    ;
  const getAllMarks = async (subject) => {
    try {
      res2 = await getAllMarksFromServer(subject);
      console.log("----all Marks----", res2);
      setMarks(res2);

    }
    catch (error) {
      console.log("error", error);
      alert(" נכשל😒");
    }
  }
  // ----------------------------------------------------------------
  function newMarksAndDiv() {

    setShow(true);
  }

  function viewMarksAndDiv(subject) {

    setShow(false);

    // getAllMarks(subject);
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

  // const postMark = async (id, mark, title) => {
  //   let teacherId = props.id;
  //   let marks = [id, mark];
  //   let data = await postMarkToServer(teacherId, marks, title);
  //   console.log("data", data)
  // }

  console.log("students", students);

  return (<div>
    <Avatar>{props.fname && props.fname[0]}</Avatar>
    <Header />
    <button onClick={() => newMarksAndDiv()}>  הכנס ציון חדש   </button>
    <button onClick={() => viewMarksAndDiv(props.subject)}>  צפיה בציונים   </button>

    {/* דיב של הכנסת שיעור חדש */}
    <div>
      {show ? <div>
        {/* <input type="text"
          placeholder=" הכנס שעור"
          value={title} onChange={(e) => {
            console.log(e.target.value)
            setTitle(e.target.value)
          }} /> */}

        {/* <button onClick={() => { getAllLessons() }} >
          👉 לחץ כדי לבחור שיעור
        </button> */}
        {/* <div> {getAllLessons() }</div> */}
        {lessons && <div>
          <select onChange={(e) => setLessHw({ name: e.target.value, type: 'lesson' })} >
            {/* <select onChange={(e) => setLessHw(e.target.value)} > */}
            {lessons.map(lesson => (
              <option class = "td2" value={lesson._id} >{lesson.lessonName}  </option>
            ))}
          </select>
        </div>}

        {
          tests && <div>
            <select onChange={(e) => setLessHw({ name: e.target.value, type: 'test' })} >
              {/* <select onChange={(e) => setLessHw(e.target.value)} > */}
              {tests.map(tst => (
                <option value={tst._id} >{tst.nameSubject}  </option>
              ))}
            </select>
          </div>
        }


        {/* דיב של הצגת ציונים */}
        <div id="divViewMark" > :הכנס ציון 
          {students && students.map(st => (
            // <MarkToUpdate student={st} lesson={lesson} />
            <MarkToUpdate student={st} lesson={lessHw}></MarkToUpdate>
          ))}
        </div>
      </div>

        : <div  >
          {<table>
            <tr>
              <td class="td1">נושא</td>
              <td class="td2"> ציון______ תלמיד</td>
             
            </tr>


            {/* {marks?.map(m => (
              <tr>
                           <td>  {m.subject}</td> 
                              <td >
               {m['marks'||'arrHw']?.map(n =>
               <tr>
                    <td class="td2"> {n?.studentId}</td>
                    <td class="td4"> {n?.mark}</td>
                </tr>)}</td>
                </tr>
            ))} */}
            {/* {lessons?.map(l => (
              <tr>
                <td>  {l.lessonName}</td>
                <td >
                  {l['arrHw']?.map(n =>
                    <tr>
                      <td class="td1"> {n?.studentId}</td>
                      <td class="td2"> {n?.mark}</td>
                    </tr>)}</td>
              </tr>
            ))} */}
            {tests?.map(l => (
              <tr>
                <td>  {l.nameSubject}</td>
                <td >
                  {l['marks']?.map(n =>
                    <tr>
                      <td class="td2"> {n?.studentId}</td>
                      <td class="td2"> {n?.mark}</td>
                    </tr>)}</td>
              </tr>
            ))}

          </table>}


        </div>
      }


    </div>
  </div>

  );

}




const mapStateToProps = (state) => {

  return {
    id: state.user?.user?._id,
    fname: state.user?.user?.firstName,
    subject: state.user?.user?.subject,
  };

};
export default connect(mapStateToProps, {})(Tasks);


