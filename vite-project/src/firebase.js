import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_TmfARRfg941kyO5FH43A7vs6F7NZ5oA",
  authDomain: "prova-bd-n-r.firebaseapp.com",
  projectId: "prova-bd-n-r",
  storageBucket: "prova-bd-n-r.firebasestorage.app",
  messagingSenderId: "612009278704",
  appId: "1:612009278704:web:9126f390b957f013f91635"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);