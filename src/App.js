import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import Home from './pages/Home/Home.page.jsx';
import Chat from './pages/Chat/Chat.page.jsx'
import ButtonAppBar from './components/ButtonAppBar/ButtonAppBar.component.jsx';
import Footer from './components/Footer/Footer.component.jsx'

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Switch>
        <Route exact path="/redux-exercise" component={Home} />
        <Route path="/redux-exercise/chat/:topic" component={Chat} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

      // <ButtonAppBar />
      // <div className="pageStyle">
      //   <CommentList />
      //   <InputArea />
      // </div>

