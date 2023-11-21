import { initializeApp } from "firebase/app";
import { GoogleAuthProvider ,getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB5o4wcN9qaODiw-ef9cEZmttQdPpbNUcI",
  authDomain: "react-ravina-3850c.firebaseapp.com",
  databaseURL: "https://react-ravina-3850c-default-rtdb.firebaseio.com",
  projectId: "react-ravina-3850c",
  storageBucket: "react-ravina-3850c.appspot.com",
  messagingSenderId: "399797580028",
  appId: "1:399797580028:web:11bc3fd8315fb8254f2779",
  measurementId: "G-Z92HWZYD5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
export default app;
