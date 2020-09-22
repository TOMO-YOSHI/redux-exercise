import React from 'react';
import './App.css';

import ButtonAppBar from './components/ButtonAppBar/ButtonAppBar.component.jsx';
import CommentList from './components/CommentList/CommentList.component.jsx';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <CommentList />
    </div>
  );
}

export default App;
