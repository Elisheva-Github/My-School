import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { signupTeacherToServer } from '../services/signupTeacher';
import { connect, useDispatch } from "react-redux";
import '../style/admin.css';
import Avatar from '@material-ui/core/Avatar';

const Admin = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [subject, setSubject] = useState('');


    const signupTeacher = async (subject, firstName, lastName, id, email, password) => {
        try {

            const res = await signupTeacherToServer(subject, firstName, lastName, id, email, password);
            console.log(res);
            alert("ברישום בוצע בהצלחה!! ברוכים הבאים לבית סיפרנו!!!!😊😊")
            history.push("/");
        }
        catch (error) {
            alert("הרישום מורה נכשל😒");
        }
    }


    return (<div>
        {/* <h1>
            <Avatar>{props.fname}</Avatar>
        </h1> */}
        <img className="pic" src={"/images/sign.png"} />
        <img className="profile" src={"/images/profil.png"} />
        <div className="admin-rectangle" >
            <div className="input_admin">
                <input type="text" id="firstName" name="firstName"
                    placeholder=":הכנס שם פרטי"
                    value={firstName} onChange={(e) => {
                        console.log(e.target.value)
                        setFirstName(e.target.value)
                    }} />

            </div>

            {/* lastname */}
            <div className="input_admin">
                <input type="text" id="lastname" name="lastname"
                    placeholder=":הכנס שם משפחה"
                    value={lastName} onChange={(e) => {
                        console.log(e.target.value)
                        setLastName(e.target.value)
                    }} />
            </div>


            {/* id */}
            <div className="input_admin">
                <input type="text" id="id" name="id"
                    placeholder=":הכנס תז"
                    value={id} onChange={(e) => {
                        console.log(e.target.value)
                        setId(e.target.value)
                    }} />

            </div>

            {/* email */}
            <div className="input_admin">
                <input type="text" id="email" name="email"
                    placeholder=": הכנס דואר אלקטרוני"
                    value={email} onChange={(e) => {
                        console.log(e.target.value)
                        setEmail(e.target.value)
                    }} />

            </div>

            {/* password */}
            <div className="input_admin">
                <input type="password" id="password" name="password"
                    placeholder=":הכנס סיסמא"
                    value={password} onChange={(e) => {
                        console.log(e.target.value)
                        setPassword(e.target.value)
                    }} />
            </div>
            <div className="input_admin">
                <input type="text" name="subject"
                    placeholder=":הכנס מקצוע שהמורה מלמד"
                    value={subject} onChange={(e) => {
                        console.log(e.target.value)
                        setSubject(e.target.value)
                    }} />
            </div>

            <div>
                <button className="signup btn-sign-teacher" onClick={() => {
                    signupTeacher(subject, firstName, lastName, id, email, password)
                    dispatch({ type: "save_teacher", payload: { subject, firstName, lastName, id, email, password } })
                }
                }> רישום   </button>
            </div>
        </div>
    </div>
    )
}

export default Admin;