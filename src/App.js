import React from 'react';
import './App.css';

import ButtonAppBar from './components/ButtonAppBar/ButtonAppBar.component.jsx';
import CommentList from './components/CommentList/CommentList.component.jsx';
import InputArea from './components/InputArea/InputArea.component.jsx';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <div className="pageStyle">
        <CommentList />
        <InputArea />
      </div>
    </div>
  );
}

export default App;
