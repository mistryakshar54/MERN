import * as firebase from 'firebase/app';
import "firebase/auth";
// import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDoeY-3muMK7KzC41p9efiZLPKGTVvh8_k",
  authDomain: "react-shoppingcart-51ab9.firebaseapp.com",
  databaseURL: "https://react-shoppingcart-51ab9.firebaseio.com",
  projectId: "react-shoppingcart-51ab9",
  storageBucket: "",
  messagingSenderId: "212335259166",
  appId: "1:212335259166:web:9ecdeb6cacacd5e3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const authProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseAuth = firebase.auth;
