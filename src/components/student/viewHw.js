
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import HeaderS from '../headerS';
import UseUploadFile from '../fileReader';


const ViewHw = (props) => {

  const { fileData, onfileChange } = UseUploadFile()


  return (<div>
    <Avatar>{props.fname && props.fname[0]}</Avatar>
    <HeaderS />

    <input type="file" onChange={onfileChange}></input>

  </div>
  )
}

const mapStateToProps = (state) => {

  return {
    fname: state.user?.user?.firstName,
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