import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgwigkCJdAqMGcolngAhSXWWseV_GAtM4",
  authDomain: "sushi-store-5614f.firebaseapp.com",
  projectId: "sushi-store-5614f",
  storageBucket: "sushi-store-5614f.firebasestorage.app",
  messagingSenderId: "314574065837",
  appId: "1:314574065837:web:f5208db945ebd6af79b624",
  measurementId: "G-EKPNYNWPD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);