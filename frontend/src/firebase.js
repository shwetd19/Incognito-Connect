// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "anonymous-social-media.firebaseapp.com",
  projectId: "anonymous-social-media",
  storageBucket: "anonymous-social-media.appspot.com",
  messagingSenderId: "796737228560",
  appId: "1:796737228560:web:31b1169a7e7666bd6e1f95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);