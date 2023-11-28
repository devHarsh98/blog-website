import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDe4tbP-SXYgT16z9KeiMFz-VNHF8Z-l9k",
    authDomain: "blogapp-e7885.firebaseapp.com",
    projectId: "blogapp-e7885",
    storageBucket: "blogapp-e7885.appspot.com",
    messagingSenderId: "43971637723",
    appId: "1:43971637723:web:1218673954b44da049b7fe",
    measurementId: "G-9B4S301YRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
