import firebase from 'firebase';
import 'firebase/firestore';
import "firebase/auth";
import "firebase/functions";


var firebaseConfig = {
    apiKey: "AIzaSyClZRjDpUJEdKGbKgEXsBlFQsubdI6Yrfs",
    authDomain: "login-be782.firebaseapp.com",
    databaseURL:"https://login-be782.firebaseio.com",
    projectId: "login-be782",
    storageBucket: "login-be782.appspot.com",
    messagingSenderId: "942049900906",
    appId: "1:942049900906:web:018078bab8e7eef8070d13"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);

 export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();

 export default fire;