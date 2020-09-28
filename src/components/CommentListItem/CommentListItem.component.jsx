import React, { useState, useEffect } from 'react';

import { useDispatch } from "react-redux";

import { deleteComment } from '../../redux/comment/comment.operations'

import { auth } from "../../firebase/firebase";

import './CommentListItem.styles.scss';

import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import NoProfile from '../../images/no_profile.png';



const CommentListItem = (props) => {
  // const [userId, setUserId] = useState("");
  const [editDeletText, seteditDeletText] = useState(null);
  const [threadTopic, setThreadTopic] = useState("");

  const dispatch = useDispatch();

  const comment = props.comment;

  const history = useHistory();

  useEffect(() => {
    const unsubscribe = history.listen((location) => {
      let topic = location.pathname;

      topic = topic.slice(topic.lastIndexOf("/") + 1);
      setThreadTopic("chat-" + topic)
    });
    unsubscribe();
  }, [])


  // const topic = props.topic;
  // const userInfo = useSelector((state) => state.user.userInfo);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(function (userAuth) {
  //     if (userAuth) {
  //       setUserId(userInfo.authId);
  //       // setUserIsLogin(true);
  //     } else {
  //       setUserId(userInfo.authId);
  //       // setUserIsLogin(false);
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // },[]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (userAuth) {
      if (userAuth) {
        const userId = userAuth.uid;
        if (comment.userId === userId) {
          seteditDeletText(
            <div className="editDeleteDiv">
              <span
                onClick={() => {
                  // console.log(comment);
                  // console.log(comment.id);
                  dispatch(deleteComment(threadTopic, comment));
                }}
                className="editButton"
              >
                Delete&nbsp; &nbsp;
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </div>
          );
        }
      }
      setThreadTopic(props.topic);
    });
    // setThreadTopic(props.topic);
    unsubscribe();
  }, [threadTopic]);
  // }, []);

  let listItemClassName;

  if (comment.isDeleted) {
    listItemClassName = "deletedComponent userComment";
  } else if (editDeletText) {
    listItemClassName = "editableComment userComment";
  } else {
    listItemClassName = "userComment";
  }

  return (
    <li className={listItemClassName}>
      <img
        className="commentAvator"
        src={
          !comment.userImageUrl || comment.isDeleted
            ? NoProfile
            : comment.userImageUrl
        }
        alt="comment_avator"
      ></img>
      <div className="commentContent">
        <p className="commentData">
          <span className="commentNo">No.{comment.commentNo}</span>
          <span className="commentName">{comment.userName}</span>
          <span className="commentDate">{comment.date}</span>
          <span className="commentTime">{comment.time}</span>
        </p>
        <div className="commentMessage">
          <p>{comment.message}</p>
        </div>
        {editDeletText}
      </div>
    </li>
  );
}

export default CommentListItem;

    // <li
    //   className={editDeletText ? "editableComment userComment" : "userComment"}
    // >

                  // <span className="editButton">Edit</span> /{" "}

