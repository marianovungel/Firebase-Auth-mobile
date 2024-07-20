// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2wC4WeFu-Vwm_qlHK_WM6Cizl2s8RJZ4",
  authDomain: "expologin-f0909.firebaseapp.com",
  projectId: "expologin-f0909",
  storageBucket: "expologin-f0909.appspot.com",
  messagingSenderId: "554804595183",
  appId: "1:554804595183:web:031b19dacb4fa3a7640e1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)