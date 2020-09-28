import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import IconLabelButton from '../../components/IconLabelButton/IconLabelButton.component';

import { getUserInfo } from "../../redux/user/user.selector.js";
import { nameUpdateInDatabase } from '../../redux/user/user.operations';

// import { auth, firestore, storage } from "../../firebase/firebase";

import "./Profile.styles.scss";

const Profile = (props) => {
  const [userInfo, setUserInfo] = useState({
    userName: "Visitor",
    authId: null,
    isLogin: false,
    userImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/chat-app-8976e.appspot.com/o/no_profile.png?alt=media&token=ab1a24c8-e687-4485-915c-e8b3da6d1738",
  });

  const state = useSelector((state) => state);
  const userInfoInStore = getUserInfo(state);

  const dispatch = useDispatch();

  useEffect(() => {
    setUserInfo(userInfoInStore);
    console.log(userInfoInStore);
  }, [userInfoInStore]);

  const nameChangeHandler = (event) => {
    setUserInfo({
        ...userInfo,
        userName:event.target.value
    });
  };

  const nameUpdate = (event) => {
      event.preventDefault();
      dispatch(nameUpdateInDatabase(userInfo.userName, userInfo.authId));
  }

  useEffect(() => {
    console.log(userInfo.userName);
  }, [userInfo.userName]);


  return (
    <div className="profilePageDiv">
      <div className="profilePageBody">
        <label className="chooseProfileImage" htmlFor="avatar">
          <img
            className="profileImage"
            src={userInfo.userImageUrl}
            alt="profile_image"
          ></img>
        </label>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept=".png, .jpg, .jpeg"
        ></input>
        <div className="displayNameChangeDiv">
          <label htmlFor="displayNameInput" className="displayNameLabel">
            Display Name
          </label>
          <input
            id="displayNameInput"
            className="displayName"
            value={userInfo.userName}
            onChange={nameChangeHandler}
          ></input>
          <br />
          <IconLabelButton
            text="Profile Update"
            icon="autorenew"
            click={nameUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
