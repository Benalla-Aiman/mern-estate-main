// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rent--portal.firebaseapp.com",
    projectId: "rent--portal",
    storageBucket: "rent--portal.appspot.com",
    messagingSenderId: "381786541617",
    appId: "1:381786541617:web:212895daa96e2570098f10"
  };


// Initialize Firebase
export const app = initializeApp(firebaseConfig);



