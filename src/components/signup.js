import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { saveUser } from "../action";
import { signupToServer } from '../services/signup';
import { getAllSubjectsFromServer } from '../services/getAllSubjects';
import  {mailToServer}  from '../services/mail';
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
    const [lessons, setLessons] = useState('');
    let res="";
    
    const signup = async (subject, firstName, lastName, id, email, password) => {
        try {

            const ress = await signupToServer(subject, firstName, lastName, id, email, password);
            console.log(ress);
            await sendMail(email,firstName);
            alert("ברישום בוצע בהצלחה!! ברוכים הבאים לבית סיפרנו!!!!😊😊")
            history.push("/");
        }
        catch (error) {
            alert("הרישום נכשל😒");
        }
    }

    const getAllSubjects = async () => {
        try {

             res = await getAllSubjectsFromServer();
                    console.log("----aaa----", res);
                
                    setLessons(res);
                    
        }
        catch (error) {
            console.log("error", error);
            alert(" נכשל😒");
        }
    }
    const sendMail = async (email,firstName) => {
        try {
          const res = await mailToServer(email,firstName)
          console.log(res);
          alert("נשלח לך מייל ");
        }
        catch (error) {
          alert("הרישום נכשל😒");
        }
      }


    return (<div className="">
    

    <img className="pic" src={"/images/sign.png"} />
    <img className="profile" src={"/images/profil.png"} />
<div className="Rectangle">
       

        <div className="input_sign" >
       
                <input type="text" id="firstName" name="firstName"
                    placeholder=":הכנס שם פרטי" 
                    value={firstName} onChange={(e) => {
                        console.log(e.target.value)
                        setFirstName(e.target.value)
                    }} />
            
        </div>

        {/* lastname */}
        <div className="input_sign" >
          
                <input type="text" id="lastname" name="lastname"
                    placeholder=":הכנס שם משפחה" 
                    value={lastName} onChange={(e) => {
                        console.log(e.target.value)
                        setLastName(e.target.value)
                    }} />
            
        </div>

        {/* id */}
        <div className="input_sign" >
           
                <input type="text" id="id" name="id"
                    placeholder=":הכנס תז"
                    value={id} onChange={(e) => {
                        console.log(e.target.value)
                        setId(e.target.value)
                    }} />
           
        </div>

        {/* email */}
        <div  className="input_sign">
         
                <input type="text" id="email" name="email"
                    placeholder=": הכנס דואר אלקטרוני"
                    value={email} onChange={(e) => {
                        console.log(e.target.value)
                        setEmail(e.target.value)
                    }} />
         
        </div>

        {/* password */}
        <div className="input_sign" >
            <input type="password" id="password" name="password"
                placeholder=":הכנס סיסמא"
                value={password} onChange={(e) => {
                    console.log(e.target.value)
                    setPassword(e.target.value)
                }} />
        </div>

        

<div className="btn-s"> 
        <div >
            <button className="button btn-shwo"  onClick={() => { getAllSubjects() }} >
             👉  לחץ כדי לבחור מקצוע
           {lessons && <div>
                {lessons.map(lesson => (
                    <button onClick={()=>{setSubject(lesson)}}>{lesson}  </button>
                ))}
           </div>}
    
            </button>
        </div>
        
        <div >
            <button className="button btn-sign" onClick={() => {
                signup(subject, firstName, lastName, id, email, password)
                dispatch({ type: "save_user", payload: { subject, firstName, lastName, id, email, password } })
            }
            }> רישום   </button>
        </div>

        </div>
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


