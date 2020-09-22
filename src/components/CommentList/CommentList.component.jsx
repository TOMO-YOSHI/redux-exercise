import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentListSetUp } from '../../redux/comment/comment.actions.js';
import { commentsInitiate } from '../../redux/comment/comment.operations.js';
import { getCommentList } from '../../redux/comment/comment.selector.js';

import CommentListItem from '../CommentListItem/CommentListItem.component';

import './CommentList.styles.scss';

import { getCommentsFromFirebase } from '../../firebase/firebase.js'

const CommentList = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    let commentList = getCommentList(state);

    useEffect(() => {
      dispatch(commentsInitiate("caht-greeting"));
    //   console.log(commentList);
    },[]);

    useEffect(()=>{
        const obj = document.querySelector(".commentListWrapper");
        obj.scrollTop = obj.scrollHeight;
        console.log(commentList);
    }, [commentList])

    return (
      <div className="commentListWrapper">
        <ul className="commentList">{
            commentList.map(comment => 
                <CommentListItem key={comment.commentNo} comment={comment} />
            )
        }</ul>
      </div>
    );
}

export default CommentList;

            // <li>
            //   <p className="commentData">
            //     <span className="commentNo">No.{commentList[0].commentNo}</span>
            //     <span className="commentName">{commentList[0].userName}</span>
            //     <span className="commentDate">
            //       {commentList[0].dateAndTime.getDate()}/
            //       {commentList[0].dateAndTime.getMonth() + 1}/
            //       {commentList[0].dateAndTime.getFullYear()}
            //     </span>
            //     <span className="commentTime">
            //       {commentList[0].dateAndTime.getHours()}:
            //       {commentList[0].dateAndTime.getMinutes() < 10
            //         ? "0" + commentList[0].dateAndTime.getMinutes()
            //         : commentList[0].dateAndTime.getMinutes()}
            //     </span>
            //   </p>
            //   <div className="commentMessage">
            //     {commentList[0].message.map((p) => (
            //       <p key={p}>{p}</p>
            //     ))}
            //   </div>
            // </li>;
