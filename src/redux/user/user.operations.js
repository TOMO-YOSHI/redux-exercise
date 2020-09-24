import { userLoginSignup, userLogout } from './user.actions';
import { signInWithGoogle } from '../../firebase/firebase';

import { firestore, auth } from "../../firebase/firebase";

export const createUserProfileDocument = async (userAuth, userName) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        email,
        createdAt,
        userName,
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

            await userRef.set({
            email,
            createdAt,
            userName,
            });
          }

          return snapShot;

        } catch(error) {
            console.log(error)
        }
    }
};