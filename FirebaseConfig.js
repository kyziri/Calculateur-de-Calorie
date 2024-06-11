import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBfNaTC7dQ1Ek_eAYn-4v-ZPJtFzcTNNsE",
  authDomain: "caclulateurcalorie.firebaseapp.com",
  projectId: "caclulateurcalorie",
  storageBucket: "caclulateurcalorie.appspot.com",
  messagingSenderId: "363718129471",
  appId: "1:363718129471:web:ae0cb5f82b06784c25458a",
  measurementId: "G-BJ3CS93H99"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export default db;
