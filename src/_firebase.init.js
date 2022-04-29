// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhDrePOUY34C50D6MbbPZvU_8_aSQbK0o",
  authDomain: "assignment11-b9f36.firebaseapp.com",
  projectId: "assignment11-b9f36",
  storageBucket: "assignment11-b9f36.appspot.com",
  messagingSenderId: "536532505748",
  appId: "1:536532505748:web:c206b4e09b734f19e4d081",
  measurementId: "G-Y048XP88R6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

export default auth