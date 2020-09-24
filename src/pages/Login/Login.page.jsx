import React from 'react';
import { useDispatch } from 'react-redux';

import LoginInputArea from '../../components/LoginInputArea/LoginInputArea.component';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";

import { loginWithGoogleAccount } from '../../redux/user/user.operations.js';

import { useHistory } from 'react-router-dom';



import "./Login.styles.scss";

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const loginWithGoogleAccountBackToHome = async() => {
        const result = await dispatch(loginWithGoogleAccount());
        if (result) {
            history.push("/redux-exercise/");
        } else {
            return;
        }
    }


    return (
      <div className="loginPageDiv">
        <div className="loginPageBody">
          <h2>Login</h2>
          <p>
            Login with your Email Address or
            <br />
            <span
              className="googleAccount"
              onClick={loginWithGoogleAccountBackToHome}
            >
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