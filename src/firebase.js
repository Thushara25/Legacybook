// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAcWvnQaDCCfSu0vjOzEfTzmK3MaXOX0mE",
    authDomain: "legacybook-620ca.firebaseapp.com",
    projectId: "legacybook-620ca",
    storageBucket: "legacybook-620ca.firebasestorage.app",
    messagingSenderId: "311854802332",
    appId: "1:311854802332:web:1aa60d3507ff69a2179459",
    measurementId: "G-N7D62P61NQ"
};

// ✅ Initialize Firebase and Auth
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);