
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCPfdqknNnqlv7yWBdlNEmp4AHA0nNzMcA",
    authDomain: "crudapp-58a08.firebaseapp.com",
    projectId: "crudapp-58a08",
    storageBucket: "crudapp-58a08.appspot.com",
    messagingSenderId: "202668296706",
    appId: "1:202668296706:web:0666563d56e61cc8dff51b",
    measurementId: "G-KSY452P7KZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
