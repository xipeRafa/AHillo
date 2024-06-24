import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyBHgG4mwWSEUBLPS1p2XFtaC8GwPIv2xN8",
  authDomain: "arquidiocesishermosillo-776dd.firebaseapp.com",
  projectId: "arquidiocesishermosillo-776dd",
  storageBucket: "arquidiocesishermosillo-776dd.appspot.com",
  messagingSenderId: "767127814821",
  appId: "1:767127814821:web:6c159d62075bcd1271c34c"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();


