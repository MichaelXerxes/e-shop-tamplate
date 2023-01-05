// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1Cslwd4B9mNkiIICGY1OLtlEF9WqyHWU",
  authDomain: "e-shop-tamplate-new.firebaseapp.com",
  projectId: "e-shop-tamplate-new",
  storageBucket: "e-shop-tamplate-new.appspot.com",
  messagingSenderId: "121217583242",
  appId: "1:121217583242:web:602474f3bb7116c9d6c573",
  measurementId: "G-N8PY26CRZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);