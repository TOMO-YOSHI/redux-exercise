import { commentListSetUp, addNewComment } from './comment.actions';

import { firestore } from '../../firebase/firebase'

export const commentsUpdate = (collectionId) => {
    return async (dispatch, getState) => {
      const collectionRef = firestore.collection(collectionId);
      // let comments = [];

      await collectionRef
        .orderBy("commentNo")
        .onSnapshot(snapshot => {
          // let comments = [];
          // let changes = snapshot;
          let changes = snapshot.docChanges();
          changes.forEach((change) => {
            if(change.type == "added") {
              const comment = change.doc.data();
              dispatch(addNewComment(comment));
            } else if (change.type == 'remove') {
              // delete comment action
            } else {
              // const comment = change.doc.data();
              // console.log(comment);
              // comments.push(comment);
            }
          });
          // console.log(comments);
          // dispatch(commentListSetUp(comments));
        });
    }
}
// export const commentsInitiate = (collectionId) => {
//     return async (dispatch, getState) => {
//       const collectionRef = firestore.collection(collectionId);
//       // let comments = [];

//       await collectionRef
//         .orderBy("commentNo")
//         .onSnapshot(snapshot => {
//           let comments = [];
//           // let changes = snapshot;
//           let changes = snapshot.docChanges();
//           changes.forEach((change) => {
//             const comment = change.doc.data();
//             console.log(comment);
//             comments.push(comment);
//           });
//           console.log(comments);
//           dispatch(commentListSetUp(comments));
//         });
//     }
// }
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

export const addCommentToDatabase = (collectionId, comment) => {
    return async (dispatch, getState) => {
      const collectionRef = firestore.collection(collectionId);

      await collectionRef.add(comment)

      dispatch(addNewComment(comment));
    }
}

// export const commentUpdate = (collectionId) => {
//       return async (dispatch, getState) => {
//         const collectionRef = firestore.collection(collectionId);
//         // let comments = [];

//         await collectionRef.onUpdate()
//           .orderBy("commentNo")
//           .onSnapshot((snapshot) => {
//             let comments = [];
//             // let changes = snapshot;
//             let changes = snapshot.docChanges();
//             changes.forEach((change) => {
//               const comment = change.doc.data();
//               console.log("update-1");
//               comments.push(comment);
//             });
//             console.log("update-2");
//             dispatch(commentListSetUp(comments));
//           });
//       };

// }