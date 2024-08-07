// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAoi_foT4lcPZc9ATQaj8uNzmsr_GmU7Sg",
  authDomain: "myecom-12795.firebaseapp.com",
  projectId: "myecom-12795",
  storageBucket: "myecom-12795.appspot.com",
  messagingSenderId: "578847073599",
  appId: "1:578847073599:web:d44c498d88e7bed2211f8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB,auth}
