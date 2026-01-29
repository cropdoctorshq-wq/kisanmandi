// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getDatabase, ref, set, get, child, push, onValue, remove, update } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXDEKPczgblsUsAIWbn7v_R7TIaSBI5wo",
    authDomain: "getkisanmandi.firebaseapp.com",
    databaseURL: "https://getkisanmandi-default-rtdb.firebaseio.com",
    projectId: "getkisanmandi",
    storageBucket: "getkisanmandi.firebasestorage.app",
    messagingSenderId: "649167074655",
    appId: "1:649167074655:web:643ebb74f68a8c2a69b2ea",
    measurementId: "G-WTCR5F8RH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database, ref, set, get, child, push, onValue, remove, update };
