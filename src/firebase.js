// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import 'firebase/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5HYRGYkvirt65d5Awj79PtM0r1HHyUzc",
  authDomain: "e-commerce-9d9ee.firebaseapp.com",
  databaseURL: "https://e-commerce-9d9ee-default-rtdb.firebaseio.com",
  projectId: "e-commerce-9d9ee",
  storageBucket: "e-commerce-9d9ee.appspot.com",
  messagingSenderId: "682483142810",
  appId: "1:682483142810:web:d1838afcb4c0cc38064f23"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth();
export {app, auth}
