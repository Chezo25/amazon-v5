// import firebase from "./firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyD05aMuxHn1Xa5_Pfeu7vwV-YBMVA90LXU",
  authDomain: "clone-a2f53.firebaseapp.com",
  projectId: "clone-a2f53",
  storageBucket: "clone-a2f53.appspot.com",
  messagingSenderId: "535913700546",
  appId: "1:535913700546:web:d347a8f51f63010c26ef5b",
};

export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

export const db = getFirestore(firebaseApp);

export const auth = getAuth(firebaseApp);
