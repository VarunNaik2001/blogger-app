import firebase, { getApps } from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getStorage } from "firebase/storage";

import 'firebase/firestore';
import 'firebase/storage';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCGINlei5lbJqPY6-shu1EVB1GeLed0kqE",
    authDomain: "fir-7cf3e.firebaseapp.com",
    projectId: "fir-7cf3e",
    storageBucket: "fir-7cf3e.appspot.com",
    messagingSenderId: "542302532994",
    appId: "1:542302532994:web:09a970a868e6ed9a420b9b",
    measurementId: "G-QDVZ2JSSCS"
  };

 
  
    const app = initializeApp(firebaseConfig);


  

 


export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const firestore = getFirestore(app);
export const storage = getStorage(app);
