import React from 'react';

import { Link } from 'react-router-dom'

import './Home.styles.scss';

const Home = (props) => {
    return (
      <div className="homePageDiv">
        <div className="homePageBody">
          <h2>Choose the Topic</h2>
          <p>You want to talk about</p>
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