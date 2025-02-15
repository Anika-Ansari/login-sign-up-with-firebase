
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDV7zBqXaoDZD6GS_qMjcEbHWGyJii7pAg",
  authDomain: "authentication-7283b.firebaseapp.com",
  projectId: "authentication-7283b",
  storageBucket: "authentication-7283b.firebasestorage.app",
  messagingSenderId: "782283696461",
  appId: "1:782283696461:web:d4cc41fe5703441f082f04",
  measurementId: "G-BN1MDLX2ED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{createUserWithEmailAndPassword,signInWithEmailAndPassword,auth}