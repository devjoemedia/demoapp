// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMcms4xyvINz4fgp5dUxzF8zvOQP_VPVk",
  authDomain: "fundraising-1358a.firebaseapp.com",
  projectId: "fundraising-1358a",
  storageBucket: "fundraising-1358a.appspot.com",
  messagingSenderId: "84775131044",
  appId: "1:84775131044:web:e46315c9f7ec143e851331"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);