import React, {useState, useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addNewComment } from '../../redux/comment/comment.actions'

import './inputArea.styles.scss';

const InputArea = () => {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comments);
    let newCommentNo = comments.commentList.length + 1;
    
    if (newCommentNo < 10) {
      newCommentNo = "000" + newCommentNo;
    } else if (newCommentNo < 100) {
      newCommentNo = "00" + newCommentNo;
    } else if (newCommentNo < 1000) {
      newCommentNo = "0" + newCommentNo;
    } 
    
    const [userName, setUserName] = useState("No Name");
    const [message, setMessage] = useState("");
    // const [dateAndTime, setDateAndTime] = useState(null);
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
            sendMessage = "No Message"
        }
        if (sendUserName === "") {
            sendUserName = "No Name"
        }

          dispatch(
            addNewComment({
              commentNo: commentNo,
              dateAndTime: new Date(),
              userName: sendUserName,
              message: [sendMessage],
            })
          );
        // setUserName("No Name");
        setMessage("");
    }

    useEffect(()=>{
        setCommentNo(newCommentNo);
    },[comments])

    // useEffect(()=> {
        // console.log(userName);
        // console.log(message);
        // console.log(comments);
    // })

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