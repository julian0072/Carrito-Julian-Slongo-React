import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXxef8Uh16iVh1tfcYBlqkwn5h1wEhDdc",
  authDomain: "react-coderhouse-c5df1.firebaseapp.com",
  projectId: "react-coderhouse-c5df1",
  storageBucket: "react-coderhouse-c5df1.appspot.com",
  messagingSenderId: "19915882002",
  appId: "1:19915882002:web:796a21357a246007bba2cb",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
