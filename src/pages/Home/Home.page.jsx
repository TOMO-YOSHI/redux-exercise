import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../redux/user/user.selector.js';

import { auth, firestore } from '../../firebase/firebase'

import './Home.styles.scss';

const Home = (props) => {
  const [userName, setUserName] = useState("");
  const [userIsLogin, setUserIsLogin] = useState(false);
  const state = useSelector(state => state);
  const userInfo = getUserInfo(state);


  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(function async(userAuth) {
      if (userAuth) {
        const collectionRef = firestore.collection("users");

        collectionRef
          .doc(userAuth.uid)
          .get()
          .then((snapshot) => setUserName(snapshot.data().userName));

        // setTimeout(() => {
        // setUserName(userInfo.userName);

        setUserIsLogin(true);
        // console.log(userAuth.uid);
        // }, 500);
      } else {
        setUserName("Vistor");
        setUserIsLogin(false);
        // console.log(userInfo);
      }
    });

    return () => {
      unsubscribe();
    }
  }, [userInfo])

  // useEffect(()=>{

  // }, [userInfo])

    return (
      <div className="homePageDiv">
        <div className="homePageBody">
          { !userIsLogin ? (
            <React.Fragment>
              <h2>Choose the Topic</h2>
              <p>You want to talk about</p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p className="hiName">Hi, {userName} !</p>
              <h2>Choose the Topic</h2>
              <p>You want to talk about</p>
            </React.Fragment>
          )}
          <ul>
            <li
              onClick={() =>
                props.history.push("/redux-exercise/chat/greeting")
              }
              className="topicGreeting"
            >
              <span>Greeting</span>
            </li>
            <li
              onClick={() => props.history.push("/redux-exercise/chat/food")}
              className="topicFood"
            >
              <span>Food</span>
            </li>
            <li
              onClick={() => props.history.push("/redux-exercise/chat/movie")}
              className="topicMovie"
            >
              <span>Movie</span>
            </li>
            <li
              onClick={() =>
                props.history.push("/redux-exercise/chat/programming")
              }
              className="topicProgramming"
            >
              <span>Programming</span>
            </li>
            <li
              onClick={() => props.history.push("/redux-exercise/chat/outdoor")}
              className="topicOutdoor"
            >
              <span>Outdoor Activity</span>
            </li>
            <li
              onClick={() =>
                props.history.push("/redux-exercise/chat/traveling")
              }
              className="topicTraveling"
            >
              <span>Traveling</span>
            </li>
            <li
              onClick={() => props.history.push("/redux-exercise/chat/school")}
              className="topicSchool"
            >
              <span>School</span>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Home;