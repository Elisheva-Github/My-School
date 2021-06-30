import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { signupTeacherToServer } from '../services/signupTeacher';
import '../style/signup.css';

const Admin = () => {

    let history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [subject, setSubject] = useState('');

    const signupTeacher = async (subject,firstName, lastName, id, email, password) => {
        try {

            const res = await signupTeacherToServer(subject,firstName, lastName, id, email, password);
            console.log(res);
            alert("ברישום בוצע בהצלחה!! ברוכים הבאים לבית סיפרנו!!!!😊😊")
            history.replace("/");
        }
        catch (error) {
            alert("הרישום מורה נכשל😒");
        }
    }


return (<div>
  <div className="firstName" >
        <div >
            <input type="text" id="firstName" name="firstName"
                placeholder=":הכנס שם פרטי" className="name"
                value={firstName} onChange={(e) => {
                    console.log(e.target.value)
                    setFirstName(e.target.value)
                }} />
        </div>
    </div>

    {/* lastname */}
    <div className="lastName" >
        <div >
            <input type="text" id="lastname" name="lastname"
                placeholder=":הכנס שם משפחה" className="name"
                value={lastName} onChange={(e) => {
                    console.log(e.target.value)
                    setLastName(e.target.value)
                }} />
        </div>
    </div>

    {/* id */}
    <div className="id" >
        <div >
            <input type="text" id="id" name="id"
                placeholder=":הכנס תז" className="name"
                value={id} onChange={(e) => {
                    console.log(e.target.value)
                    setId(e.target.value)
                }} />
        </div>
    </div>

    {/* email */}
    <div className="email" >
        <div >
            <input type="text" id="email" name="email"
                placeholder=": הכנס דואר אלקטרוני" className="name"
                value={email} onChange={(e) => {
                    console.log(e.target.value)
                    setEmail(e.target.value)
                }} />
        </div>
    </div>

    {/* password */}
    <div className="password" >
        <input type="password" id="password" name="password"
            placeholder=":הכנס סיסמא" className="name"
            value={password} onChange={(e) => {
                console.log(e.target.value)
                setPassword(e.target.value)
            }} />
    </div>

    <div>
           <select onChange={e=>{setSubject(e.target.value)}} >
          < option >a</option> 
          < option> b</option> 
           </select>
        </div>
    <div>
        <button className="signup" onClick={() => signupTeacher(subject,firstName, lastName, id, email, password)}> רישום   </button>
    </div>
</div>
)
}

export default Admin;