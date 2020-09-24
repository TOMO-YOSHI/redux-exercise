import React from 'react';

import SignupInputArea from '../../components/SignupInputArea/SignupInputArea.component';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";

import { signInWithGoogle } from "../../firebase/firebase";



import "./Signup.styles.scss";

const Signup = () => {
    return (
      <div className="signupPageDiv">
        <div className="signupPageBody">
          <h2>Signup</h2>
          <p>
            Signup with your Email Address or
            <br />
            <span className="googleAccount" onClick={signInWithGoogle}>
              Google Account
            </span>
            &nbsp;
            <FontAwesomeIcon icon={faHandPointLeft} />
          </p>
          <SignupInputArea />
        </div>
      </div>
    );
}

export default Signup;