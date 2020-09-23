import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
apiKey: "AIzaSyCIWtOYcNVbkFSc5zeTl1OD5ipu2NPmwiM",
authDomain: "chat-app-8976e.firebaseapp.com",
databaseURL: "https://chat-app-8976e.firebaseio.com",
projectId: "chat-app-8976e",
storageBucket: "chat-app-8976e.appspot.com",
messagingSenderId: "622522794289",
appId: "1:622522794289:web:a089a4b8f033367ac67010",
measurementId: "G-Y5ZTFZ215Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);