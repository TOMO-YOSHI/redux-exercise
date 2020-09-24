import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux"

import FormInput from "../FormInput/FormInput.component";
import IconLabelButton from '../IconLabelButton/IconLabelButton.component';

import { createNewAccountWithEmail } from '../../redux/user/user.operations';

import { useHistory } from "react-router-dom";
import { auth } from "../../firebase/firebase";

import "./SigninInputArea.styles.scss";

const Signup = () => {
  const [userCredentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPass: ""
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const { userName, email, password, confirmPass } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!userName || !email || !password || !confirmPass) {
      alert("Please fill in all fields");
      return;
    }

    if ( password.length < 6 ) {
      alert("Password should be 6 or more characters");
      return;
    }

    if (password !== confirmPass) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await dispatch(createNewAccountWithEmail(userName, email, password));
      setCredentials({
        userName: "",
        email: "",
        password: "",
        confirmPass: "",
      });

      history.push("/redux-exercise/");

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  useEffect(()=> {
    console.log(userCredentials);
  })

  return (
    <div className="loginInputArea">
      <form>
        <FormInput
          name="userName"
          type="text"
          value={userName}
          handleChange={handleChange}
          label="Name"
          required
        />
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
        <FormInput
          name="confirmPass"
          type="password"
          value={confirmPass}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />

        <div className="buttons">
          <IconLabelButton
            text="Signup"
            icon={null}
            click={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default Signup;