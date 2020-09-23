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
            <li onClick={() => props.history.push('/chat/greeting')}>Greeting</li>
            <li><Link to="/chat/food">Food</Link></li>
            <li><Link to="/chat">Movie</Link></li>
            <li><Link to="/chat">Programming</Link></li>
            <li><Link to="/chat">Outdoor Activity</Link></li>
            <li><Link to="/chat">Travering</Link></li>
            <li><Link to="/chat">Romance</Link></li>
          </ul>
        </div>
      </div>
    );
}

export default Home;