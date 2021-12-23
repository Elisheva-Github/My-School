
import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import HeaderS from '../headerS';
import UseUploadFile from '../fileReader';
import { getAllLessonsFromServer } from '../../services/getAllLessons';
import { postMyFileToServer } from '../../services/postMark';
import '../../style/student/s_previousLessons.css';


const ViewHw = (props) => {
  const [file, setFile] = useState('');
  const { fileData, onfileChange } = UseUploadFile()
  // const { file, onfileChange } = UseUploadFile()
  const [lessons, setLessons] = useState([]);

  const postMyHwFile = async (lessonId, studentId, file) => {
    let res = '';
    debugger
    let type = "Lessons"
    res = await postMyFileToServer({ type, lessonId, studentId, file: fileData });
    console.log("postMyHwFileToServer", res);
  }

  useEffect(async () => {
    getAllLessonsFromServer(props.subject).then((data) => {
      setLessons(data);
      console.log("***getAllLessonsFromServer", data);
    })
  }, [])

  return (<div>
    <Avatar>{props.fname && props.fname[0]}</Avatar>
    <HeaderS />



    <div className="hw_table">
      <div className="table">
        <div class="pageTitle">
          שיעורי בית:
        </div>
        <br />
        {<table>
          <tr className="title">
            <td>שם שעור </td>
            <td>תאריך</td>
            <td>להוריד ש.ב</td>
            <td>להעלות ש.ב</td>
          </tr>
          {lessons?.map(l => (
            <tr>
              <td>  {l.lessonName}</td>
              <td>  {l.date.slice(0, 10)}</td>
              <td >
                {l['hwQuestions']?.map(n =>
                  <tr>
                    {/* <td > <a href={n.file} download="file">⬇</a> <iframe src={n.file} frameborder="0"></iframe></td> */}
                    <td > <a href={n.file} download="hw">לחץ להורדה</a></td>
                  </tr>)}
              </td>
              <td><input type="file" onChange={onfileChange} placeholder="⬆" ></input> </td>

              <button class="sendBtn" onClick={() => postMyHwFile(l._id, props.id, file)}> שלח</button>
            </tr>
          ))}

        </table>}
      </div>
    </div>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    fname: state.user?.user?.firstName,
    subject: state.user?.user?.subject,
    id: state.user?.user?._id,
  };
};
export default connect(mapStateToProps, {})(ViewHw);











// import React, { useState } from 'react';
// import { useHistory } from "react-router-dom";
//  import {viewTasksFromServer} from '../../services/viewTasks'
//  import HeaderS from '../headerS';
//  import Avatar from '@material-ui/core/Avatar';


// const Tasks = () => {

//   let history = useHistory();
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');

//   const task = async(userName,password) => {
//      let res = '';
//      res = await viewTasksFromServer(userName, password);
//      console.log(res);
//       //שולחים לשרת את שם המשתמש והסיסמא
//       ///פניה לדאטא ביס של התלמיד
//       if(1)//תלמיד
//       history.replace("/student");
//       if(2)//מורה
//       history.replace("/teacher");
//       else
//        alert("User not found😥😥!! please sign up.")
//   }


//   return (<div className="login">
//       <HeaderS/>
//      {/* <h1>
//         <Avatar>{props.fname}</Avatar>
//       </h1> */}
//     <img className="logo" src={"/images/logo.png"} />
//     <img className="welcome" src={"/images/welcome.png"} />
//     <img className="Profil" src={"/images/profil.png"} />
//     <div className="group4" >
//       <div >
//         <input type="text" id="userName" name="userName"
//          placeholder=":הכנס שם משתמש" className="name" 
//          value={userName} onChange={(e) =>{ 
//           console.log(e.target.value)
//           setUserName(e.target.value)}}/>
//       </div>
//     </div>
//     <div className="group3" >
//       <input type="password" id="password" name="password"
//        placeholder=":הכנס סיסמא" className="name" 
//        value={password} onChange={(e) =>{ 
//         console.log(e.target.value)
//         setPassword(e.target.value)}}/>
//     </div>

//     <div className="group2">

//       <button className="button" onClick={() => viewTasksFromServer(userName,password)}>  התחברות   </button>
//     </div>
//   </div>
//   );

// }

// export default Tasks;