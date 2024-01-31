// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1jOtwWTNdzybDTMDm2JtZeJoDuY7hIQI",
  authDomain: "burgers-db506.firebaseapp.com",
  projectId: "burgers-db506",
  storageBucket: "burgers-db506.appspot.com",
  messagingSenderId: "455727344696",
  appId: "1:455727344696:web:673914c3f8c5f5ddf44acd",
  measurementId: "G-GC9NT6PGTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);