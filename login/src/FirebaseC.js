import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  projectId: process.env.REACT_APP_FIREBASE_STOREAGE_BUCKET,
  projectId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  projectId: process.env.REACT_APP_FIREBASE__APP_ID,
  storageBucket: "water-4c08b.appspot.com",
  messagingSenderId: "219786333351",
  appId: "1:219786333351:web:c7aa3f0d46bc6d3c635f82",
  measurementId: "G-ETQGSMNDHE"
});

export const auth = app.auth()
export default app