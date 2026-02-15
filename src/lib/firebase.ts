import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBykFnb_mCPkymgXMYdiz0jq6of5TMZ7JA",
  authDomain: "griha-lakshmi.firebaseapp.com",
  projectId: "griha-lakshmi",
  storageBucket: "griha-lakshmi.firebasestorage.app",
  messagingSenderId: "1075710103350",
  appId: "1:1075710103350:web:12a798bc9bb6a2b611ad97",
  measurementId: "G-4G7X6DNJLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export default app;
