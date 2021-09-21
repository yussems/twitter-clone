import firebase from 'firebase'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBqjlkC094rz7jbFtsYInZ7xUKgQwNmCbs",
    authDomain: "twiter-clone-e4fb1.firebaseapp.com",
    projectId: "twiter-clone-e4fb1",
    storageBucket: "twiter-clone-e4fb1.appspot.com",
    messagingSenderId: "927710608551",
    appId: "1:927710608551:web:07acb2fa640f8b68b96f82",
    measurementId: "G-078ZYV3876"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore()
  export default db