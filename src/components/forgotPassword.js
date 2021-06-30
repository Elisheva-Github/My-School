import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import "../style/forgotPassword.css";


const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    let history = useHistory();
    const backToLogin = () => { history.replace("/"); }

    return (<div>
        <div className="email">
            <div >
                <input type="text" id="email" name="email"
                    placeholder=": הכנס דואר אלקטרוני" className="name"
                    value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} />

            </div>
            
              
        </div>
        <div>
            <button className="signup" onClick={() => backToLogin()}> המשך   </button>
            תמשרנ התיאש ליימה תבותכ תא ןזה תוקד המכ ךות ךילא חלשת המסיסהו
            
        </div>
    </div>)
}


export default ForgotPassword;
