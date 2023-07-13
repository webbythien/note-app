// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXAlOZBZGS4ICFdlwBooKfc2TQiz2ET9M",
  authDomain: "note-app-webbythien.firebaseapp.com",
  projectId: "note-app-webbythien",
  storageBucket: "note-app-webbythien.appspot.com",
  messagingSenderId: "457371774699",
  appId: "1:457371774699:web:93894cb354fcef4e7758ae",
  measurementId: "G-N8ZQ2CLMRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);