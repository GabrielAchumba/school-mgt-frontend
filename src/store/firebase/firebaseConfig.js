// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9VzN87QcRpEbSegBYjZBTqigdJLkiBAc",
  authDomain: "lemongatetech.firebaseapp.com",
  databaseURL: "https://lemongatetech.firebaseio.com",
  projectId: "lemongatetech",
  storageBucket: "lemongatetech.appspot.com",
  messagingSenderId: "391787476785",
  appId: "1:391787476785:web:48fc551307c092ff8ae210"
};

/* firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true}); */


// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth()


export { app, auth }