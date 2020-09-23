import React from "react";

import "./Chat.styles.scss";

import CommentList from "../../components/CommentList/CommentList.component.jsx";
import InputArea from "../../components/InputArea/InputArea.component.jsx";

const Chat = (props) => {
    const topic = props.match.params.topic;
    // console.log(topic);
    
    return (
      <div className="Chat">
        <div className="pageStyle">
          <CommentList topic={topic} />
          <InputArea topic={topic} />
        </div>
      </div>
    );
}

export default Chat;
