import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDryKUCo6GD-H3Kzl0n3FxiKPS7VSxsrNI",
  authDomain: "udevsblog.firebaseapp.com",
  projectId: "udevsblog",
  storageBucket: "udevsblog.appspot.com",
  messagingSenderId: "306998851120",
  appId: "1:306998851120:web:4176a54d5bbe801a49dff5",
  measurementId: "G-QHYPXGC0GB",
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
const auth = getAuth();

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
export function logOut() {
  return signOut(auth);
}
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
}
