import { commentListSetUp } from './comment.actions';

import { firestore } from '../../firebase/firebase'

export const commentsInitiate = (collectionId) => {
    return async (dispatch, getState) => {
      const collectionRef = firestore.collection(collectionId);
      let comments = [];

      await collectionRef.get().then((snapshot) => {
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
// export const commentsInitiate = (collectionId) => {
//     return async (dispatch, getState) => {
//         const comments = await getCommentsFromFirebase(collectionId);
//         // dispatch(commentListSetUp(comments));
//         dispatch(getCommentsFromFirestore(comments));
//         console.log(comments);
//         // return comments;
//     }
// }