import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-7021e.firebaseapp.com",
  projectId: "interviewiq-7021e",
  storageBucket: "interviewiq-7021e.firebasestorage.app",
  messagingSenderId: "174068307207",
  appId: "1:174068307207:web:1954ed2d775d495ceba1a2"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

const provider = new GoogleAuthProvider();

export {auth,provider}
