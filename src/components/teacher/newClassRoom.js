// import React, { useState, useEffect } from 'react';
// import '../../style/teacher/newClassRoom.css';
// import { newLessonToServer } from '../../services/newClassRoom';
// import { useHistory } from 'react-router-dom';
// import { connect, useDispatch } from "react-redux";
// import Header from '../header';

// const NewClassRoom = (props) => {
//     //  const dispatch=useDispatch();
//     const [numLesson, setNumLesson] = useState('');
//     const [lessonName, setLessonName] = useState('');
//     const [file, setFile] = useState('');
//     const [date, setDate] = useState('');
//     const [notes, setNotes] = useState('');
//     const [time, setTime] = useState('');
//     const [teacher, setTeacher] = useState('');

//     const history = useHistory()
//     const postLesson = async (teacher, numLesson, lessonName, file, date, notes, time) => {

//         let res = '';
//         res = await newLessonToServer(props.teacher, numLesson, lessonName, file, date, notes, time, props.subject);

//         console.log(res);
//         alert("lesson send to server👍👍👍")

//     }
//     useEffect(() => setTeacher(history.location.state), [])
//     return (<div>

//         <Header />
//         {/* <img className="classRoomImg" src={"/images/newClassRoom.PNG"} />
//         {/* <select className="test" value={1,2,3} > מספר שיעור   </select> */}

// {/* 
//         <input className="numLesson" type="number" min="0" max="24"
//             value={numLesson}
//             onChange={(e) => {
//                 console.log(e.target.value)
//                 setNumLesson(e.target.value)
//             }} /> */}
//         <br />
//         <input type="text"
//             value={lessonName} onChange={(e) => {
//                 console.log(e.target.value)
//                 setLessonName(e.target.value)
//             }} />
//         <br />
//         לבחירת קובץ:
//         <input type="file" title="בחר קובץ"
//             value={file} onChange={(e) => {
//                 console.log(e.target.value)
//                 setFile(e.target.value)
//             }}
//         /> <br />
//         {/* <input type="file" name="file1" >העלאת חומר לימוד</input> */}
//         <br />
//         <input className="dateLesson" type="date"
//             value={date} onChange={(e) => {
//                 console.log(e.target.value)
//                 setDate(e.target.value)
//             }}
//         /><br />
//         <textarea rows="8" cols="40" dir="rtl"
//             value={notes} onChange={(e) => {
//                 console.log(e.target.value)
//                 setNotes(e.target.value)
//             }}>
//             הכנס הערה
//         </textarea><br />
//         <input type="time"
//             value={time} onChange={(e) => {
//                 console.log(e.target.value)
//                 setTime(e.target.value)
//             }} />

//         <div>{props.subject}</div>   <div>{props.teacher}</div>
//         <button className="button" onClick={() => postLesson(props.teacher, numLesson, lessonName, file, date, notes, time, props.subject)}>  התחברות   </button>
//     </div>

//     );
// }

// //export default NewClassRoom;


// const mapStateToProps = (state) => {

//     return {

//         teacher: state.user?.user?.firstName,
//         subject: state.user?.user?.subject,

//     };
// };
// // export default connect(mapStateToProps, {})(Login);
// export default connect(mapStateToProps, {})(NewClassRoom);



import React, { useState, useEffect } from 'react';
import '../../style/teacher/newClassRoom.css';
import { newLessonToServer } from '../../services/newClassRoom';
import { useHistory } from 'react-router-dom';
import { connect, useDispatch } from "react-redux";
import Header from '../header';
import Avatar from '@material-ui/core/Avatar';
import UseUploadFile from '../fileReader';
import '../../style/teacher/newClassRoom.css'
//  ' ../style/teacher/newClassRoom.css';

const NewClassRoom = (props) => {
    const dispatch = useDispatch();
    const { fileData, onfileChange } = UseUploadFile()
    const [numLesson, setNumLesson] = useState('');
    const [lessonName, setLessonName] = useState('');
    const [file, setFile] = useState('');
    const [date, setDate] = useState('');
    const [notes, setNotes] = useState('');
    const [time, setTime] = useState('');
    const [teacher, setTeacher] = useState('');

    const history = useHistory()
    const postLesson = async (numLesson, lessonName, file, date, notes, time) => {

        let res = '';

        res = await newLessonToServer({ teacher: props.teacher, numLesson, lessonName, file: fileData, date, notes, time, subject: props.subject });

        console.log(res);
        alert("lesson send to server👍👍👍")

    }
    useEffect(() => setTeacher(history.location.state), [])

    return (
        <>
            <Avatar>{props.fname && props.fname[0]}</Avatar>
            <Header />
            <div class="all">
                <div className="aa "> יצירת שעור חדש</div>
                <input type="number" min="0" max="24" placeholder=":הכנס מס שעור" className="a b"
                    value={numLesson}
                    onChange={(e) => {
                        // console.log(e.target.value)
                        setNumLesson(e.target.value)
                    }} />

                <input type="text" className="a c" placeholder=":נושא"
                    value={lessonName} onChange={(e) => {
                        console.log(e.target.value)
                        setLessonName(e.target.value)
                    }} />


                {/* <input type="file" className="a d" 
                    value={file} onChange={(e) => {
                        // console.log(e.target.value)
                        setFile(e.target.value)
                    }}
                />  */}
                <input type="file" onChange={onfileChange} className="a d"></input>

                <input type="date" className="a e"
                    value={date} onChange={(e) => {
                        console.log(e.target.value)
                        setDate(e.target.value)
                    }}
                />
                <input placeholder=" הכנס הערה" className="a f"
                    value={notes} onChange={(e) => {
                        console.log(e.target.value)
                        setNotes(e.target.value)
                    }} />


                <input type="time" className="a g"
                    value={time} onChange={(e) => {
                        console.log(e.target.value)
                        setTime(e.target.value)
                    }} />
                <button className="buttn" onClick={() => postLesson(numLesson, lessonName, file, date, notes, time,)}>  התחברות   </button>

            </div>
        </>)
}


const mapStateToProps = (state) => {

    return {

        teacher: state.user?.user?.firstName,
        subject: state.user?.user?.subject,
        fname: state.user?.user?.firstName,

    };
};
export default connect(mapStateToProps, {})(NewClassRoom);