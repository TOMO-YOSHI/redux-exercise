import React from 'react';

const CommentListItem = (props) => {
    const comment = props.comment;

    return (
      <li>
        <p className="commentData">
          <span className="commentNo">No.{comment.commentNo}</span>
          <span className="commentName">{comment.userName}</span>
          <span className="commentDate">
            {comment.dateAndTime.getDate()}/
            {comment.dateAndTime.getMonth() + 1}/
            {comment.dateAndTime.getFullYear()}
          </span>
          <span className="commentTime">
            {comment.dateAndTime.getHours()}:
            {comment.dateAndTime.getMinutes() < 10
              ? "0" + comment.dateAndTime.getMinutes()
              : comment.dateAndTime.getMinutes()}
          </span>
        </p>
        <div className="commentMessage">
          {comment.message.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </li>
    );
}

export default CommentListItem;