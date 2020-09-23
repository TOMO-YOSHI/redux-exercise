import { commentListSetUp, addNewComment } from './comment.actions';

import { firestore } from '../../firebase/firebase'

export const commentsInitiate = (collectionId) => {
    return async (dispatch, getState) => {
      const collectionRef = firestore.collection(collectionId);
      let comments = [];

      await collectionRef
        .orderBy("commentNo")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            const comment = doc.data();
            //   console.log(comment);
            comments.push(comment);
          });
        });

    //   console.log(comments);
      dispatch(commentListSetUp(comments));
    }
}

export const addCommentToDatabase = (collectionId, comment) => {
    return async (dispatch, getState) => {
      const collectionRef = firestore.collection(collectionId);

      await collectionRef.add(comment)

      dispatch(addNewComment(comment));
    }
}