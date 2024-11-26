// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// firebase auth ko impost kiya hai
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwJ0e4ZmYCgwiwWWFsAFWMNs-46cx9aic",
  authDomain: "social-app-8561b.firebaseapp.com",
  projectId: "social-app-8561b",
  storageBucket: "social-app-8561b.appspot.com",
  messagingSenderId: "863498820999",
  appId: "1:863498820999:web:1cdea86e407b61bc424722",
  measurementId: "G-PZYD865RV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
export const storage = getStorage(app);
// auth ka object bnya hai
export const  auth = getAuth(app); 