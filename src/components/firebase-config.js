import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCptc2scSfaJm3Hzp1ycqZLAdQOPpc2o94",
    authDomain: "udevs-blog.firebaseapp.com",
    projectId: "udevs-blog",
    storageBucket: "udevs-blog.appspot.com",
    messagingSenderId: "630057394530",
    appId: "1:630057394530:web:2db49aa09a4502e5420c3b",
    measurementId: "${config.measurementId}"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore();