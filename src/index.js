import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // new in version



// import * as firebase from 'firebase';
// import 'firebase/firestore'; 

// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firestore -- new in version
export const db = getFirestore(app); //create instance of firebase access and export it 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

