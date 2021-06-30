import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
 import {viewTasksFromServer} from '../../services/viewTasks'

const Tasks = () => {

  let history = useHistory();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  const task = async(userName,password) => {
     let res = '';
     res = await viewTasksFromServer(userName, password);
     console.log(res);
      //שולחים לשרת את שם המשתמש והסיסמא
      ///פניה לדאטא ביס של התלמיד
      if(1)//תלמיד
      history.replace("/student");
      if(2)//מורה
      history.replace("/teacher");
      else
       alert("User not found😥😥!! please sign up.")
  }


  return (<div className="login">
    <img className="logo" src={"/images/logo.png"} />
    <img className="welcome" src={"/images/welcome.png"} />
    <img className="Profil" src={"/images/profil.png"} />
    <div className="group4" >
      <div >
        <input type="text" id="userName" name="userName"
         placeholder=":הכנס שם משתמש" className="name" 
         value={userName} onChange={(e) =>{ 
          console.log(e.target.value)
          setUserName(e.target.value)}}/>
      </div>
    </div>
    <div className="group3" >
      <input type="password" id="password" name="password"
       placeholder=":הכנס סיסמא" className="name" 
       value={password} onChange={(e) =>{ 
        console.log(e.target.value)
        setPassword(e.target.value)}}/>
    </div>
    
    <div className="group2">
      
      <button className="button" onClick={() => viewTasksFromServer(userName,password)}>  התחברות   </button>
    </div>
  </div>
  );

}

export default Tasks;