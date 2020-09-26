import React from "react";
import { useDispatch } from "react-redux";

import SignupInputArea from '../../components/SignupInputArea/SignupInputArea.component';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";

import { loginWithGoogleAccount } from "../../redux/user/user.operations.js";

import { useHistory } from "react-router-dom";

import "./Signup.styles.scss";

const Signup = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    // useEffect(() => {
    //   const unsubscribe = auth.onAuthStateChanged(function (userAuth) {
    //     if (userAuth) {
    //       setTimeout(() => {
    //         history.push("/redux-exercise/");
    //       }, 1000);
    //     }
    //   });
    //   return () => unsubscribe();
    // });

    const loginWithGoogleAccountBackToHome = async () => {
      const result = await dispatch(loginWithGoogleAccount());
      if (result) {
          setTimeout(() => {
            history.push("/redux-exercise/");
          }, 500);
      } else {
        return;
      }
    };

    return (
      <div className="signupPageDiv">
        <div className="signupPageBody">
          <h2>Signup</h2>
          <p>
            Signup with your Email Address or
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
          <SignupInputArea />
        </div>
      </div>
    );
}

export default Signup;