// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACnlzkRFVaxKvTSJAPFKFMB7ypmryJp2k",
  authDomain: "waiter-60be0.firebaseapp.com",
  projectId: "waiter-60be0",
  storageBucket: "waiter-60be0.appspot.com",
  messagingSenderId: "997390307289",
  appId: "1:997390307289:web:4f91e603ed753b6e4653c8",
  measurementId: "G-KG2T48ST4L",
};
const firestore = admin.firestore();
firestore.settings({ ignoreUndefinedProperties: true });
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const data = getFirestore(app);
export const auth = getAuth(app);

export default firebase;
