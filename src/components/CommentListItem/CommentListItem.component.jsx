import React from 'react';

const CommentListItem = (props) => {
    const comment = props.comment;

    return (
      <li>
        <p className="commentData">
          <span className="commentNo">No.{comment.commentNo}</span>
          <span className="commentName">{comment.userName}</span>
          <span className="commentDate">{comment.date}</span>
          <span className="commentTime">{comment.time}</span>
        </p>
        <div className="commentMessage">
          <p>{comment.message}</p>
        </div>
      </li>
    );
}

export default CommentListItem;
