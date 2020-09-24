import React from 'react';

import LoginInputArea from '../../components/LoginInputArea/LoginInputArea.component';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";

import { signInWithGoogle } from "../../firebase/firebase";

import { useHistory } from 'react-router-dom';



import "./Login.styles.scss";

const Login = () => {
    const history = useHistory();


    return (
      <div className="loginPageDiv">
        <div className="loginPageBody">
          <h2>Login</h2>
          <p>
            Login with your Email Address or
            <br />
            <span className="googleAccount" onClick={signInWithGoogle}>
              Google Account
            </span>
            &nbsp;
            <FontAwesomeIcon icon={faHandPointLeft} />
          </p>
          <p>
            If you don't have your account yet,
            <br />
            <span
              className="pleaseSignup"
              onClick={() => history.push("/redux-exercise/signup")}
            >
              please Signup
            </span>
            &nbsp;
            <FontAwesomeIcon icon={faHandPointLeft} />
          </p>
          <LoginInputArea />
        </div>
      </div>
    );
}

export default Login;