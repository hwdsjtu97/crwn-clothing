import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyCjLU8tBseH3f6uq_TVigijWJpCJ9n9KQ8",
  authDomain: "crwn-db-e8721.firebaseapp.com",
  projectId: "crwn-db-e8721",
  storageBucket: "crwn-db-e8721.appspot.com",
  messagingSenderId: "1088587010041",
  appId: "1:1088587010041:web:8b23f7faebdd273f46f728",
  measurementId: "G-P48XEW1QGF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
