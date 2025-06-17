// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx-Gw8oGeKPP0bGiXesy8UZt0TjU6n7rE",
  authDomain: "netflixgpt-d0024.firebaseapp.com",
  projectId: "netflixgpt-d0024",
  storageBucket: "netflixgpt-d0024.firebasestorage.app",
  messagingSenderId: "745694199973",
  appId: "1:745694199973:web:31c47c74f7be19e1fa8d4c",
  measurementId: "G-845QEQG6DV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();