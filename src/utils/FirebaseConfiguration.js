import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const config = {
    apiKey: "AIzaSyCRGshne368uORhEgoF48_V4dOrq8xfdwk",
    authDomain: "watermeter-fd8ec.firebaseapp.com",
    databaseURL: "https://watermeter-fd8ec.firebaseio.com",
    projectId: "watermeter-fd8ec",
    storageBucket: "watermeter-fd8ec.appspot.com",
    messagingSenderId: "392890094677",
    appId: "1:392890094677:web:57c01b865369a59775f0dc"
  };
  // Initialize Firebase
  const fireb = firebase.initializeApp(config);
  const database = fireb.database();
  const auth = fireb.auth();

  export { database, auth };
