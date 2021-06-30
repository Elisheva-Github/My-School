import React, { useState, useEffect } from 'react';
import '../../style/teacher/newClassRoom.css';
import {newLessonToServer} from '../../services/newClassRoom';
import { useHistory } from 'react-router-dom';
import {connect, useDispatch} from "react-redux";

const NewClassRoom = (props) => {
  //  const dispatch=useDispatch();
    const [numLesson, setNumLesson] = useState('');
    const [lessonName, setLessonName] = useState('');
    const [file, setFile] = useState('');
    const [date, setDate] = useState('');
    const [notes, setNotes] = useState('');
    const [time, setTime] = useState('');
    const [teacher, setTeacher] = useState('');
   
    const history=useHistory()
    const postLesson=async(teacher,numLesson, lessonName,file,date,notes,time)=>
    {
            let subject1=props.subject;
            let res = '';
            res = await newLessonToServer(teacher,numLesson, lessonName,file,date,notes,time,subject1);
            console.log(res);
            alert("lesson send to server👍👍👍")
        
    }
    useEffect(()=>setTeacher(history.location.state),[])
    return (<div>
        <img className="classRoomImg" src={"/images/newClassRoom.PNG"} />
        {/* <select className="test" value={1,2,3} > מספר שיעור   </select> */}
        <br />
   

        <input className="numLesson" type="number" min="0" max="24"
            value={numLesson}
            onChange={(e) => {
                console.log(e.target.value)
                setNumLesson(e.target.value)
            }} />
        <br />
        <input type="text"
            value={lessonName} onChange={(e) => {
                console.log(e.target.value)
                setLessonName(e.target.value)
            }} />
        <br />
        לבחירת קובץ:
        <input type="file" title="בחר קובץ"
            value={file} onChange={(e) => {
                console.log(e.target.value)
                setFile(e.target.value)
            }}
        /> <br />
        {/* <input type="file" name="file1" >העלאת חומר לימוד</input> */}
        <br />
        <input className="dateLesson" type="date"
            value={date} onChange={(e) => {
                console.log(e.target.value)
                setDate(e.target.value)
            }}
        /><br />
        <textarea rows="8" cols="40" dir="rtl"
            value={notes} onChange={(e) => {
                console.log(e.target.value)
                setNotes(e.target.value)
            }}>
            הכנס הערה
        </textarea><br />
        <input type="time"
            value={time} onChange={(e) => {
                console.log(e.target.value)
                setTime(e.target.value)
            }} />
        <button className="button" onClick={() => postLesson(teacher,numLesson, lessonName,file,date,notes,time)}>  התחברות   </button>
    </div>

    );
}

//export default NewClassRoom;


const mapStateToProps = (state) => {

    return {
        subject: state.user?.user?.subject,
    };
  };
  // export default connect(mapStateToProps, {})(Login);
  export default connect(mapStateToProps, {})(NewClassRoom);