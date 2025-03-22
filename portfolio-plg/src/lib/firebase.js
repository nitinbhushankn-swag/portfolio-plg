// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt6HziMRUZ3bIjaPj7ZiLPb9Rarsh2l9Y",
  authDomain: "portfolio-plg.firebaseapp.com",
  projectId: "portfolio-plg",
  storageBucket: "portfolio-plg.firebasestorage.app",
  messagingSenderId: "464485042903",
  appId: "1:464485042903:web:90fcc572d693b32a4e7e92",
  measurementId: "G-DSRJT1C8V3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);