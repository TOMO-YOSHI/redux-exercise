import { commentListSetUp, addNewComment, modifyComment } from './comment.actions';

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
            let comment = doc.data();
            comment = {...comment, id: doc.id}
            comments.push(comment);
          });
        });

    //   console.log(comments);
      dispatch(commentListSetUp(comments));
    }
}

export const addCommentToDatabase = (collectionId, comment, authId) => {
    return async (dispatch, getState) => {
      const collectionRef = firestore.collection(collectionId);

      let newComment = comment;

      if (authId !== null) {
        newComment = {...comment, userId: authId, isDeleted: false}
      }

      await collectionRef.add(newComment)

      // dispatch(addNewComment(newComment));
    }
}

export const deleteComment = (collectionId, comment, ) => {
  return async (dispatch, getState) => {
      const collectionRef = firestore.collection(collectionId);

      const newComment = {
        ...comment,
        deletedUserName: comment.userName,
        deletedMessage: comment.message,
        userName: "Deleted",
        message: "Deleted",
        isDeleted: true
      };

      await collectionRef.doc(comment.id).set(newComment);

      dispatch(modifyComment(newComment));
  }
}

// ***********************************************
// Update function moved to CommentList.comppnent
// ***********************************************

// export const commentsUpdate = (collectionId) => {
//   return async (dispatch, getState) => {
//     const collectionRef = firestore.collection(collectionId);

//     const unsubscribe = await collectionRef
//       .orderBy("commentNo")
//       .onSnapshot((snapshot) => {
//         let changes = snapshot.docChanges();
//         changes.forEach((change) => {
//           if (change.type == "added") {
//             let comment = change.doc.data();
//             console.log(comment);
//             comment = { ...comment, id: change.doc.id };
//             dispatch(addNewComment(comment));
//           } else if (change.type == "remove") {

//           } else {

//           }
//         });
//       });
//     return unsubscribe;
//   };
// };

