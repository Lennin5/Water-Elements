import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const app = firebase.initializeApp({
  // apiKey: "AIzaSyCm1OPGeGKLap1gCgnkbs76KONVaU97EkQ",
  // authDomain: "water-elements-62e1c.firebaseapp.com",
  // databaseURL: "https://water-elements-62e1c-default-rtdb.firebaseio.com",
  // projectId: "water-elements-62e1c",
  // storageBucket: "water-elements-62e1c.appspot.com",
  // messagingSenderId: "314833075149",
  // appId: "1:314833075149:web:36ed7d577ef773f3702284",
  // measurementId: "G-SQGFLP6BEJ"
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STOREAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE__APP_ID,  
})

export const auth = firebase.auth();
export const database = firebase.database();

export default app;