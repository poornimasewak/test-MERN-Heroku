import firebase from 'firebase/app';
import 'firebase/auth';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCY-5NifzqylFmjLa0iM730JI_GkGUl4sM",
    authDomain: "tutor-time.firebaseapp.com",
    databaseURL: "https://tutor-time.firebaseio.com",
    projectId: "tutor-time",
    storageBucket: "tutor-time.appspot.com",
    messagingSenderId: "689396965007"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

const auth = firebase.auth();

export {
  auth,
};