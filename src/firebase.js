// import { initializeApp } from 'firebase/app';
// import { getAuth,GoogleAuthProvider } from 'firebase/auth';
// import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-7G4SFKRWVkGB0hN4NZrZCRWvqtWGvEc",
    authDomain: "discord-clone-tw.firebaseapp.com",
    projectId: "discord-clone-tw",
    storageBucket: "discord-clone-tw.appspot.com",
    messagingSenderId: "603985226688",
    appId: "1:603985226688:web:d971857dae512827f33625",
    measurementId: "G-YTBL8SEV07"
  };

  const app = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth(app);
  const provider = new firebase.auth.GoogleAuthProvider();
  const db = firebase.firestore(app);
  // const app = initializeApp(firebaseConfig)
// const auth= getAuth(app)
// const provider= new GoogleAuthProvider()

export {db,auth,provider}