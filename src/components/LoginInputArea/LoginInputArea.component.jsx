import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../FormInput/FormInput.component";
import IconLabelButton from '../IconLabelButton/IconLabelButton.component';

import { auth } from "../../firebase/firebase";
import { useHistory } from "react-router-dom";

import { createUserProfileDocument } from "../../redux/user/user.operations";
import { userLoginSignup } from "../../redux/user/user.actions";



import "./LoginInputArea.styles.scss";

const Login = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const history = useHistory();

  const { email, password } = userCredentials;

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(function (userAuth) {
  //     if (userAuth) {
  //       history.push("/redux-exercise/");
  //     }
  //   });
  //   return () => unsubscribe();
  // });

  const loginHandleSubmit = async (event) => {
    event.preventDefault();

    if ( !email || !password ) {
        alert("Please fill in all fields");
        return;
    }

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({
        email: "",
        password: "",
      });

      await auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          
          userRef.onSnapshot((snapShot) => {
            dispatch(
              userLoginSignup(
                {
                  userName: snapShot.data().userName,
                  authId: snapShot.id,
                  isLogin: true
                }
              )
            )
          });
        }});

        history.push("/redux-exercise/");

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="loginInputArea">
      <form>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />

        <div className="buttons">
          <IconLabelButton click={loginHandleSubmit} text="Login" icon={null} />
        </div>
      </form>
    </div>
  );
};

export default Login;