import React, {useState, useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addCommentToDatabase } from '../../redux/comment/comment.operations.js';

import './inputArea.styles.scss';

const InputArea = (props) => {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comments);
    let newCommentNo = comments.commentList.length + 1;

    const topic = props.topic;
    
    if (newCommentNo < 10) {
      newCommentNo = "000" + newCommentNo;
    } else if (newCommentNo < 100) {
      newCommentNo = "00" + newCommentNo;
    } else if (newCommentNo < 1000) {
      newCommentNo = "0" + newCommentNo;
    } 
    
    const [userName, setUserName] = useState("No Name");
    const [message, setMessage] = useState("");
    const [commentNo, setCommentNo] = useState(newCommentNo);

    const nameChangeHandler = (event) => {
        setUserName(event.target.value)
    }
    const messageChangeHandler = (event) => {
        setMessage(event.target.value)
    }
    const submitComment = (event) => {
      event.preventDefault();

      // if (message === "") {
      //     alert("Message Area is required!!!")
      //     return;
      // }

      let sendMessage = message;
      let sendUserName = userName;

      if (sendMessage === "") {
        sendMessage = "No Message";
      }
      if (sendUserName === "") {
        sendUserName = "No Name";
      }

      const month = new Date().getMonth() + 1;
      const day = new Date().getDate();
      const year = new Date().getFullYear();

      const date = month + "/" + day + "/" + year;

      const hours = new Date().getHours();
      const mins = new Date().getMinutes() < 10
              ? "0" + new Date().getMinutes()
              : new Date().getMinutes()
      
      const time = hours + ":" + mins

      dispatch(
        addCommentToDatabase(
            "chat-" + topic,
            {
            commentNo: commentNo,
            date: date,
            time: time,
            userName: sendUserName,
            message: sendMessage,
            }
        )
      );
      // setUserName("No Name");
      setMessage("");
    };

    useEffect(()=>{
        setCommentNo(newCommentNo);
    },[comments])

    return (
      <div className="inputAreaDiv">
        <form>
          <input
            type="text"
            placeholder="Your Name"
            // value={userName}
            onChange={nameChangeHandler}
          />
          <textarea
            placeholder="Write message"
            onChange={messageChangeHandler}
            value={message}
            required
          />
          <button type="submit" onClick={submitComment}>
            SUBMIT
          </button>
        </form>
      </div>
    );
}

export default InputArea;