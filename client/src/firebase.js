// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-71977.firebaseapp.com",
  projectId: "mern-estate-71977",
  storageBucket: "mern-estate-71977.appspot.com",
  messagingSenderId: "674083846207",
  appId: "1:674083846207:web:3a81814865804a2ebb608a"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);



