// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from"firebase/auth"
import {getFirestore} from"firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC92bJpEkDPxarbucvW7ytmWV61f6lo714",
  authDomain: "fir-course-2beaf.firebaseapp.com",
  projectId: "fir-course-2beaf",
  storageBucket: "fir-course-2beaf.appspot.com",
  messagingSenderId: "247600933795",
  appId: "1:247600933795:web:15ee4fbcc1c08d94e80816",
  measurementId: "G-M0PKKDYHR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)
export const storage = getStorage(app);
