
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxU4wvuH1KJV_Ob3EYwYH63yUftAcbPhs",
  authDomain: "dabru-atelie.firebaseapp.com",
  projectId: "dabru-atelie",
  storageBucket: "dabru-atelie.appspot.com",
  messagingSenderId: "978250071697",
  appId: "1:978250071697:web:f233f5a1173880a2024930",
  measurementId: "G-X3MGYF9TBC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
