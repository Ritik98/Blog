import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBoP7qmDs5MSlgXdG2hA3-STzyUgGB4XG0",
    authDomain: "auth-4ec00.firebaseapp.com",
    databaseURL: "https://auth-4ec00-default-rtdb.firebaseio.com",
    projectId: "auth-4ec00",
    storageBucket: "auth-4ec00.appspot.com",
    messagingSenderId: "1017554365006",
    appId: "1:1017554365006:web:e1c2eb6be56a3fda9c711f",
    measurementId: "G-W53CN9ZECF"
  };
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
