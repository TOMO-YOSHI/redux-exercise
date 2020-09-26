import React, { useState, useEffect } from 'react';

// import { useDispatch, useSelector } from "react-redux";

import { auth } from "../../firebase/firebase";

import './CommentListItem.styles.scss';


const CommentListItem = (props) => {
  // const [userId, setUserId] = useState("");
  const [editDeletText, seteditDeletText] = useState(null);

  const comment = props.comment;
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
              <span className="editButton">Edit</span> /{" "}
              <span className="editButton">Delete</span>
            </div>
          );
        }
      }
    });
    unsubscribe();
  }, []);

  return (
    <li
      className={editDeletText ? "editableComment userComment" : "userComment"}
    >
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
    </li>
  );
}

export default CommentListItem;
