import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB03hD5faHdevCsqnQfC3fiz6iECmdS9VU",
  authDomain: "ai-expo-app.firebaseapp.com",
  projectId: "ai-expo-app",
  storageBucket: "ai-expo-app.appspot.com",
  messagingSenderId: "283711293470",
  appId: "1:283711293470:web:70ffaa3cc63850db42060f",
  measurementId: "G-Q82GZRV3C2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
