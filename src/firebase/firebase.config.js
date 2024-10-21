// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD1pNwNyRUVIV5VLjys4l8rgyImqWWGHQ",
  authDomain: "job-finder-479ae.firebaseapp.com",
  projectId: "job-finder-479ae",
  storageBucket: "job-finder-479ae.appspot.com",
  messagingSenderId: "182403039880",
  appId: "1:182403039880:web:7fb94258eaa22cbd82d53d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;