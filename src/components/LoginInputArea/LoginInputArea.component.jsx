import React, { useState } from "react";

import FormInput from "../FormInput/FormInput.component";
import IconLabelButton from '../IconLabelButton/IconLabelButton.component';

import { auth } from "../../firebase/firebase";


import "./LoginInputArea.styles.scss";

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({
        email: "",
        password: "",
      });
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
      <form onSubmit={handleSubmit}>
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
          <IconLabelButton text="Login" icon={null} />
        </div>
      </form>
    </div>
  );
};

export default SignIn;

        //   <CustomButton type="submit"> Sign in </CustomButton>
        //   <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
        //     {" "}
        //     Sign in with Google{" "}
        //   </CustomButton>
