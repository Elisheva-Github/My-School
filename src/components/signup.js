import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { saveUser } from "../action";
import { signupToServer } from '../services/signup';
import { getAllSubjectsFromServer } from '../services/getAllSubjects';
import { mailToServer } from '../services/mail';
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
    const [lessons, setLessons] = useState([]);
    const [hasError, setHasError] = useState(false);

    const [flagFirstName, setFlagFirstName] = useState(false);
    const [flagId, setFlagId] = useState(false);
    const [flagEmail, setFlagEmail] = useState(false);
    const [flagPassword, setFlagPassword] = useState(false);
    const [flagSubject, setFlagSubject] = useState(false);

    const [PasswordMass, setPasswordMass] = useState(false);
    const [IdMass, setIdMass] = useState(false);
    const [emailMass, setEmailMass] = useState(false);

    let res = "";

    useEffect(() => {
        if (firstName !== "" && id !== "" && email !== "" && password !== "" && subject !== ""
            && !flagFirstName && !flagId && !flagEmail && !flagPassword && !flagSubject)
            setHasError(false)
        else
            setHasError(true)
    }, [firstName, id, email, password, subject]);



    const signup = async (subject, firstName, lastName, id, email, password) => {

        if (hasError) {
            if (firstName === "") { setFlagFirstName(true) };
            if (id === "") { setFlagId(true) };
            if (email === "") { setFlagEmail(true) };
            if (password === "") { setFlagPassword(true) };
            if (subject === "") setFlagSubject(true);
        }
        else {
            try {

                const ress = await signupToServer(subject, firstName, lastName, id, email, password);
                console.log(ress);
                await sendMail(email, firstName);
                alert("ברישום בוצע בהצלחה!! ברוכים הבאים לבית סיפרנו!!!!😊😊")
                history.push("/");
            }
            catch (error) {
                alert("הרישום נכשל😒");
            }
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
    const sendMail = async (email, firstName) => {
        try {
            const res = await mailToServer(email, firstName)
            console.log(res);
            alert("נשלח לך מייל ");
        }
        catch (error) {
            alert("הרישום נכשל😒");
        }
    }
    function isNotEmail() {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (!regEmail.test(email))
    }
    function onlyNumbers() {
        let regNumber = /^[0-9]$/
        return (!regNumber.test(id))
    }
    // function is_israeli_id_number(id) {
    //     id = String(id).trim();
    //     if (id.length > 9 || isNaN(id)) return false;
    //     id = id.length < 9 ? ("00000000" + id).slice(-9) : id;
    //     return Array.from(id, Number).reduce((counter, digit, i) => {
    //         const step = digit * ((i % 2) + 1);
    //         return counter + (step > 9 ? step - 9 : step);
    //     }) % 10 === 0;
    // }
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
                        setFlagFirstName(false)

                    }} />
                <div>{flagFirstName ? "שדה חובה!" : ""}</div>


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
                        setFlagId(false);
                    }}
                    onBlur={() => {
                        if (onlyNumbers() ) {
                            setIdMass(true);
                            setFlagId(true);
                        }
                    }}
                />
                <div>{flagId && IdMass ? "!לא תקין " : flagId ? "שדה חובה!" : ""}</div>

            </div>

            {/* email */}
            <div className="input_sign">

                <input type="text" id="email" name="email"
                    placeholder=": הכנס דואר אלקטרוני"
                    value={email} onChange={(e) => {
                        console.log(e.target.value)
                        setEmail(e.target.value)
                        setFlagEmail(false)
                    }}
                    onBlur={() => {
                        if (isNotEmail()) {
                            setEmailMass(true);
                            setFlagEmail(true);
                        }
                        else {
                            setEmailMass(false);
                        }
                    }}

                />
                <div>{flagEmail && emailMass ? "!מייל לא תקין " : flagEmail ? "שדה חובה!" : ""}</div>


            </div>

            {/* password */}
            <div className="input_sign" >
                <input type="password" id="password" name="password"
                    placeholder=":הכנס סיסמא"
                    value={password} onChange={(e) => {
                        console.log(e.target.value)
                        setPassword(e.target.value)
                        setFlagPassword(false);
                    }}
                    onBlur={() => {
                        if (password.length < 8) {
                            setPasswordMass(true);
                            setFlagPassword(true);
                        }
                    }}
                />
                <div>{flagPassword && PasswordMass ? "! לפחות 8 תווים" : flagPassword ? "שדה חובה!" : ""}</div>


            </div>



            <div className="btn-s">

                <div >
                    <button className="button btn-shwo" onClick={() => { getAllSubjects() }} >
                        👉  לחץ כדי לבחור מקצוע
                        {lessons && <div>
                            {lessons.map(lesson => (
                                <button onClick={() => { setSubject(lesson.subject) }}>{lesson.subject}  </button>
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


