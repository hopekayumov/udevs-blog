import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { useState, useEffect } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyCptc2scSfaJm3Hzp1ycqZLAdQOPpc2o94",
    authDomain: "udevs-blog.firebaseapp.com",
    projectId: "udevs-blog",
    storageBucket: "udevs-blog.appspot.com",
    messagingSenderId: "630057394530",
    appId: "1:630057394530:web:2db49aa09a4502e5420c3b",
    measurementId: "${config.measurementId}"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
const auth = getAuth();

export function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}
export function logOut() {
    return signOut(auth)
}
export function useAuth() {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
       const unsub =  onAuthStateChanged(auth, user => setCurrentUser(user));
       return unsub;
    }, [])
    return currentUser;
}
