import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import "../style/forgotPassword.css";
import Avatar from '@material-ui/core/Avatar';
import { forgetPassword } from '../services/forgetPassword';

const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();
    const update = async () => {
        const res = await forgetPassword(email, password);
        console.log("res11111111", res);
        history.replace("/");
    }

    return (<div className="">
        <img className="pic_forgot" src={"/images/forgot.png"} />
        <img className="profile_forgot" src={"/images/profil.png"} />
        <div className="rectangle_forgot">
            <div className="input_sign">

                <input type="text" id="email" name="email"
                    placeholder=": הכנס דואר אלקטרוני"
                    value={email} onChange={(e) => {
                        console.log(e.target.value)
                        setEmail(e.target.value)
                    }} />

            </div>


            <div className="iinput_sign">
                <input type="password" id="uPassword" name="uPassword"
                    placeholder=":הכנס סיסמא חדשה"
                    value={password} onChange={(e) => {
                        console.log(e.target.value)
                        setPassword(e.target.value)
                    }} />
            </div>




            <div className="iinput_sign">
                <input type="password" id="uPassword" name="uPassword"
                    placeholder=":הכנס שוב לצורך אימות"
                    value={password} onChange={(e) => {
                        console.log(e.target.value)
                        setPassword(e.target.value)
                    }} />
            </div>
            <div className="btn-login_after_update">
                <button onClick={() => update()}> עדכן   </button>
            </div>



        </div>
    </div>)
}


export default ForgotPassword;
