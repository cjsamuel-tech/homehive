// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "homehive-38ff0.firebaseapp.com",
  projectId: "homehive-38ff0",
  storageBucket: "homehive-38ff0.firebasestorage.app",
  messagingSenderId: "964346534274",
  appId: "1:964346534274:web:c9819c2eae33bfe7a0979b"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};