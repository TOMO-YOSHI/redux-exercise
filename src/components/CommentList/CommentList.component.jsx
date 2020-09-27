import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentsInitiate } from '../../redux/comment/comment.operations.js';
import { getCommentList } from '../../redux/comment/comment.selector.js';
import { addNewComment } from '../../redux/comment/comment.actions'

import CommentListItem from '../CommentListItem/CommentListItem.component';

import { firestore } from "../../firebase/firebase";

import './CommentList.styles.scss';

const CommentList = (props) => {
  const dispatch = useDispatch();

  const topic = props.topic;
  const [commentList, setCommentList] = useState([])

  const classNameForBackgroundImage = topic + "BackGround";

  const state = useSelector((state) => state);
  let stateCommentList = getCommentList(state);
    // setCommentList(stateCommentList);

  // useEffect( () => {
  //   console.log('page-init')
  //   dispatch(commentsInitiate("chat-" + topic));
  //   return () => setCommentList([]);
  // },[]);

  useEffect(()=> {
      console.log("page-init");
      dispatch(commentsInitiate("chat-" + topic));

      const collectionRef = firestore.collection("chat-" + topic);

      const unsubscribe = collectionRef
        .orderBy("commentNo")
        .onSnapshot(snapshot => {
          let changes = snapshot.docChanges();
          changes.forEach((change) => {
            if(change.type == "added") {
              const comment = change.doc.data();
              // console.log(comment);
              dispatch(addNewComment(comment));
              // setCommentList([...commentList, comment])

              // const newCommentList = commentList;
              // console.log(newCommentList);
              // newCommentList.push(comment);
              // setCommentList(newCommentList);
              
              const obj = document.querySelector(".commentListWrapper");
              obj.scrollTop = obj.scrollHeight;
            } else if (change.type == 'remove') {
              // delete comment action
            } else {
              // const comment = change.doc.data();
              // console.log(comment);
              // comments.push(comment);
            }
          });
        });
      return () => {
        unsubscribe();
        setCommentList([]);
      };
  }, [])

  useEffect(() => {
    const obj = document.querySelector(".commentListWrapper");
    obj.scrollTop = obj.scrollHeight;
    // console.log(stateCommentList);
    setCommentList(stateCommentList);

    return () => setCommentList([]);
    // }, []);
  }, [stateCommentList]);

    return (
      <div className={"commentListWrapper" + " " + classNameForBackgroundImage}>
        <ul className="commentList">
          {commentList.map((comment) => (
            <CommentListItem key={comment.id} comment={comment} />
          ))}
        </ul>
      </div>
    );
}

export default CommentList;