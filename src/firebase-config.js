const Rebase = require('re-base');
const firebase = require('firebase');

var FirebaseConfig = {
    apiKey: "AIzaSyAPZlhehh0gDB7qL5FXyY390YPBJFlwkJ4",
    authDomain: "cursoreact-7f21d.firebaseapp.com",
    databaseURL: "https://cursoreact-7f21d.firebaseio.com",
    projectId: "cursoreact-7f21d",
    storageBucket: "cursoreact-7f21d.appspot.com",
    messagingSenderId: "486768940941",
    appId: "1:486768940941:web:ee219fb6724b8ea7"
  };
// Initialize Firebase
const app = firebase.initializeApp(FirebaseConfig);
const config = Rebase.createClass(app.database());

export const storage = app.storage();
export const authLogin = app.auth()

export default config;