import React, {useState, useEffect} from 'react';
import IconLabelButtons from "../IconLabelButton/IconLabelButton.component";

import { useDispatch, useSelector } from 'react-redux';
import { addCommentToDatabase } from '../../redux/comment/comment.operations.js';
import { userNameChange } from '../../redux/user/user.actions';

import { auth } from "../../firebase/firebase";

import './inputArea.styles.scss';

const InputArea = (props) => {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comments);
    const userInfo = useSelector((state) => state.user.userInfo);
    let newCommentNo = comments.commentList.length + 1;

    const topic = props.topic;
    
    if (newCommentNo < 10) {
      newCommentNo = "000" + newCommentNo;
    } else if (newCommentNo < 100) {
      newCommentNo = "00" + newCommentNo;
    } else if (newCommentNo < 1000) {
      newCommentNo = "0" + newCommentNo;
    } 
    
    const [userName, setUserName] = useState("Visitor");
    const [message, setMessage] = useState("");
    const [commentNo, setCommentNo] = useState(newCommentNo);
    const [userIsLogin, setUserIsLogin] = useState(false);


    const nameChangeHandler = (event) => {
        dispatch(userNameChange(event.target.value));
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
            },
            userInfo.authId
        )
      );
      // setUserName("No Name");
      setMessage("");
    };

    useEffect(()=>{
        setCommentNo(newCommentNo);
    },[comments])

    // useEffect(() => {
    //   if (!userInfo.isLogin) {
    //     setUserName(userInfo.userName);
    //   }
    // });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (userAuth) {
      // setTimeout(() => {
      if (userAuth) {
        setUserName(userInfo.userName);
        setUserIsLogin(true);
        console.log("run 1");
      } else {
        setUserName(userInfo.userName);
        setUserIsLogin(false);
        console.log("run 2")
      }
      // }, 600);
    });

    return () => {
      unsubscribe();
    };
  });

    return (
      <div className="inputAreaDiv">
        <form>
          {userIsLogin ? (
            <input
              className="loginedUserNameInput"
              // onFocus={this.blur()}
              readOnly="readonly"
              type="text"
              value={userName}
            />
          ) : (
            <input
              type="text"
              placeholder="Your Name"
              onChange={nameChangeHandler}
              value={userName}
            />
          )}
          <textarea
            placeholder="Write message"
            onChange={messageChangeHandler}
            value={message}
            required
          />
          <IconLabelButtons
            text="send"
            icon="send"
            type="submit"
            click={submitComment}
          />
        </form>
      </div>
    );
}

export default InputArea;

          // <button type="submit" onClick={submitComment}>
          //   SUBMIT
          // </button>;
