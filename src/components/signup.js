import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { saveUser } from "../action";
import { signupToServer } from '../services/signup';
import { getAllSubjectsFromServer } from '../services/getAllSubjects'
import '../style/signup.css';

const Signup = (props) => {
    let history = useHistory();
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [subject, setSubject] = useState('');
    const [teachers, setTeachers] = useState('');
    const res="";
    const signup = async (subject, firstName, lastName, id, email, password) => {
        try {

            const ress = await signupToServer(subject, firstName, lastName, id, email, password);
            console.log(ress);
            alert("ברישום בוצע בהצלחה!! ברוכים הבאים לבית סיפרנו!!!!😊😊")
            history.replace("/");
        }
        catch (error) {
            alert("הרישום נכשל😒");
        }
    }

    const getAllSubjects = async () => {

        try {

             res = await getAllSubjectsFromServer();
            console.log("----aaa----"+res);
         
            setTeachers(res);
            console.log("----teachers----"+teachers);

           // <div>
    
         
        // </div>


        }
        catch (error) {
            alert("הרישום נכשל😒");
        }
    }



    return (<div className="login">
        <img className="logo" src={"/images/logo.png"} />
        <img className="welcome" src={"/images/welcome.png"} />
        <img className="Profil" src={"/images/profil.png"} />

        {/* firstname */}
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
            <button onClick={() => { getAllSubjects() }} >
              לחץ כדי לראות את כל המקצועות 
           {/* <div>
                {res?.filter(ls => ls.subject === props.subject).map(herLess => (
                    <li>
                    {herLess?.numLesson?.numLesson}
                        {herLess?.lessonName?.lessonName}
                        {herLess?.file?.file}
                        {herLess?.date?.date}
                        {herLess?.notes?.notes}
                        {herLess?.time?.time}
                    </li>
                ))}
           </div>
            */}
           
           
            </button>
        </div>
        <div>
            <button className="signup" onClick={() => {
                signup(subject, firstName, lastName, id, email, password)
                dispatch({ type: "save_user", payload: { subject, firstName, lastName, id, email, password } })
            }
            }> רישום   </button>
        </div>

    </div>
    );

}

const mapStateToProps = (state) => {
    return {
        subject: state.user?.user?.subject,
    };
};

// export default Signup;
//export default Signup;
export default connect(mapStateToProps, {})(Signup);
// connect(null, { saveUser })(


