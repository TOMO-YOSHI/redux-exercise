import { signInWithGoogle } from '../../firebase/firebase';

import { firestore, auth } from "../../firebase/firebase";

import { userNameChange } from './user.actions';

export const createUserProfileDocument = async (userAuth, userName) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email } = userAuth;
    const createdAt = new Date();
    const userImageUrl =
      "https://firebasestorage.googleapis.com/v0/b/chat-app-8976e.appspot.com/o/no_profile.png?alt=media&token=ab1a24c8-e687-4485-915c-e8b3da6d1738";

    try {
      await userRef.set({
        email,
        createdAt,
        userName,
        userImageUrl,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const createNewAccountWithEmail = (userName, email, password) => {
    return async (dispath, getState) => {
        try {

          const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
          );

          await createUserProfileDocument(user, userName);

        //   const userInfo = {
        //     userName: userName,
        //     authId: user.uid,
        //     isLogin: true,
        //   };

        //   dispath(userLoginSignup(userInfo));
        } catch(error) {
            console.log(error)
        }
    }
};

export const loginWithGoogleAccount = () => {
    return async (dispath, getState) => {
        try {

          const { user } = await signInWithGoogle();

          const { uid, displayName, email } = user;

        //   await createUserProfileDocument(user, userName);

        //   console.log(uid, displayName, email);

          if (!user) return;

          const userRef = firestore.doc(`users/${uid}`);

          const snapShot = await userRef.get();

          if (!snapShot.exists) {
            const createdAt = new Date();
            const userName = displayName;
            const userImageUrl =
              "https://firebasestorage.googleapis.com/v0/b/chat-app-8976e.appspot.com/o/no_profile.png?alt=media&token=ab1a24c8-e687-4485-915c-e8b3da6d1738";


            await userRef.set({
              email,
              createdAt,
              userName,
              userImageUrl,
            });
          }

          return snapShot;

        } catch(error) {
            console.log(error)
        }
    }
};

export const nameUpdateInDatabase = (userName, userId) => {
  return async (dispath, getState) => {
    try {

      const userRef = firestore.doc(`users/${userId}`);

      const snapShot = await userRef.update({userName});

      dispath(userNameChange(userName));

      alert("Your Name was successfully updated!")

      return snapShot;
    } catch (error) {
      console.log(error);
    }
  };
}
