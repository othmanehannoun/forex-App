// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBd7kgbKNKr3xciAUc-Bf7wVs-RXRLRzXA",
  authDomain: "forex-app-d71e4.firebaseapp.com",
  projectId: "forex-app-d71e4",
  storageBucket: "forex-app-d71e4.appspot.com",
  messagingSenderId: "122970439783",
  appId: "1:122970439783:android:b248915402df4e0dde94c2",
  measurementId: "G-R08RGDBMVE"
};
// Initialize Firebase



if (!firebase.apps.length) {
 // firebase.initializeApp(firebaseConfig);
 firebase.initializeApp(firebaseConfig);
}

export { firebase };