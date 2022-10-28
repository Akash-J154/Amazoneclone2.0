// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQYnDQjLtPYvGBhdETYv-YhbtUOMYzHXw",
  authDomain: "clone-239ec.firebaseapp.com",
  projectId: "clone-239ec",
  storageBucket: "clone-239ec.appspot.com",
  messagingSenderId: "886627599745",
  appId: "1:886627599745:web:293a4d0b5c3231e6699480",
  measurementId: "G-6BM1N4Q3C2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);
export {db,getAuth};