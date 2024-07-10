// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALvdMCIV43TqKtu4TFAdRp0PnqsKTmfeQ",
  authDomain: "react-chat-app--july-2024.firebaseapp.com",
  databaseURL: "https://react-chat-app--july-2024-default-rtdb.firebaseio.com",
  projectId: "react-chat-app--july-2024",
  storageBucket: "react-chat-app--july-2024.appspot.com",
  messagingSenderId: "490541780016",
  appId: "1:490541780016:web:a8e0f4ef2316e4d93071f5",
  measurementId: "G-CGEW789G9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
