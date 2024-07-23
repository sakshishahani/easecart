// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCyI-8k-j_GhWjFWr982HKyzZzTCiCMHck",
    authDomain: "easecart-challenge.firebaseapp.com",
    projectId: "easecart-challenge",
    storageBucket: "easecart-challenge.appspot.com",
    messagingSenderId: "13094294764",
    appId: "1:13094294764:web:3925442a451927b91481c9",
    measurementId: "G-XFX7ZTMWZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
