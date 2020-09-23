import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentsInitiate } from '../../redux/comment/comment.operations.js';
import { getCommentList } from '../../redux/comment/comment.selector.js';

import CommentListItem from '../CommentListItem/CommentListItem.component';

import './CommentList.styles.scss';

const CommentList = (props) => {
    const topic = props.topic;

    const classNameForBackgroundImage = topic + "BackGround";

    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    let commentList = getCommentList(state);

    useEffect(() => {
      dispatch(commentsInitiate("chat-" + topic));
      // console.log(topic)
      // dispatch(commentsInitiate("chat-greeting"));
    //   console.log(commentList);
    },[]);

    useEffect(()=>{
        const obj = document.querySelector(".commentListWrapper");
        obj.scrollTop = obj.scrollHeight;
        console.log(commentList);
    }, [commentList])

    return (
      <div className={"commentListWrapper" + " " + classNameForBackgroundImage}>
        <ul className="commentList">{
            commentList.map(comment => 
                <CommentListItem key={comment.commentNo} comment={comment} />
            )
        }</ul>
      </div>
    );
}

export default CommentList;