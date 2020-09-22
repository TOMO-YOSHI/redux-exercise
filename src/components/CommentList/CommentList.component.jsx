import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentListSetUp } from '../../redux/comment/comment.actions.js';

import './CommentList.styles.scss';

const CommentList = () => {
    const comments = useSelector((state) => state.comments);
    const dispatch = useDispatch();
    let commentList = comments.commentList;

    useEffect(() => {
      dispatch(commentListSetUp());
      console.log(commentList);
    },[]);

    return (
      <ul className="commentList">
        <li>
          <p className="commentData">
            <span className="commentNo">No.{commentList[0].commentNo}</span>
            <span className="commentName">{commentList[0].userName}</span>
            <span className="commentDate">
              {commentList[0].dateAndTime.getDate()}/
              {commentList[0].dateAndTime.getMonth() + 1}/
              {commentList[0].dateAndTime.getFullYear()}
            </span>
            <span className="commentTime">
              {commentList[0].dateAndTime.getHours()}:
              {commentList[0].dateAndTime.getMinutes() < 10
                ? "0" + commentList[0].dateAndTime.getMinutes()
                : commentList[0].dateAndTime.getMinutes()}
            </span>
          </p>
          <div className="commentMessage">
            {commentList[0].message.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </li>
        <li>
          <p className="commentData">
            <span className="commentNo">No.0002</span>
            <span className="commentName">No Name</span>
            <span className="commentDate">21/09/2020</span>
            <span className="commentTime">19:42</span>
          </p>
          <p className="commentMessage">Hello Canada</p>
        </li>
      </ul>
    );
}

export default CommentList;