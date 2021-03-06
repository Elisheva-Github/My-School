import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { loginToServer } from '../services/login';
import Avatar from '@material-ui/core/Avatar';
import '../style/login.css';
const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);


  useEffect(() => {
    if (userName !== "" && password !== "")
      setHasError(false)
    else
      setHasError(true)
  }, [userName, password]);



  const login = async (userName, password) => {

    const res = await loginToServer(userName, password);
    console.log("res11111111", res);

    if (res && res.kind) {
      // history.replace(`/teacher`,{userName});
      history.push(`/${res.kind}`);
      dispatch({ type: "save_user", payload: res.result })

    }
    else {
      alert("User not found馃槬馃槬!! please sign up.")
    }
  }
  const forgotPassword = () => {
    history.push("/forgotPassword");
  }

  const goToSignup = () => {
    history.push("/signup");
  }

  return (<div className="">
    <h1>
      <Avatar>{props.fname}</Avatar>
    </h1>
    {/* <h1>fname: {props.fname}</h1> */}
    <img className="mySchool" src={"/images/mySchool.png"} />
    <img className="pprofile" src={"/images/profil.png"} />
    <div className="rectangle">

      <div className="iinput_sign ip">
        <input type="text" id="userName" name="userName"
          placeholder=":讛讻谞住 砖诐 诪砖转诪砖"
          value={userName} onChange={(e) => {
            console.log(e.target.value)
            setUserName(e.target.value)
          }} />
      </div>

      <div className="iinput_sign">
        <input type="password" id="uPassword" name="uPassword"
          placeholder=":讛讻谞住 住讬住诪讗"
          value={password} onChange={(e) => {
            console.log(e.target.value)
            setPassword(e.target.value)
          }} />
      </div>


      <div  >
        <button className="btn-login" disabled={hasError} onClick={() => login(userName, password)}>  讛转讞讘专讜转   </button>
      </div>


      <div>
        <button className=" btn-goToSignup iforgat" onClick={() => forgotPassword()}>  ?砖讻讞转 住讬住诪讗   </button>
      </div>

      <div >
        <button className="btn-goToSignup" onClick={() => goToSignup()}>  讗讬谉 诇讱 讞砖讘讜谉? 讛讬专砖诐   </button>
      </div>
    </div>

  </div>
  );

}


const mapStateToProps = (state) => {

  return {
    fname: state.user?.user?.firstName,
  };
};
export default connect(mapStateToProps, {})(Login);

// export default Login;