import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../FormInput/FormInput.component";
import IconLabelButton from '../IconLabelButton/IconLabelButton.component';

import { auth } from "../../firebase/firebase";
import { useHistory } from "react-router-dom";

import { createUserProfileDocument } from "../../redux/user/user.operations";
import { userLoginSignup, userInitialize } from "../../redux/user/user.actions";



import "./LoginInputArea.styles.scss";

const Login = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const history = useHistory();

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
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
          <IconLabelButton click={handleSubmit} text="Login" icon={null} />
        </div>
      </form>
    </div>
  );
};

export default Login;

        //   <CustomButton type="submit"> Sign in </CustomButton>
        //   <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
        //     {" "}
        //     Sign in with Google{" "}
        //   </CustomButton>
