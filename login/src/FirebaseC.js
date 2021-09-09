// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe4I7Gqky2o0kZ03IyO-X0RylEnTICHVY",
  authDomain: "water-4c08b.firebaseapp.com",
  projectId: "water-4c08b",
  storageBucket: "water-4c08b.appspot.com",
  messagingSenderId: "219786333351",
  appId: "1:219786333351:web:c7aa3f0d46bc6d3c635f82",
  measurementId: "G-ETQGSMNDHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);