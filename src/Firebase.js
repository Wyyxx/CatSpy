import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAb79pHREcwgD3f7ONk4qvqJs4eR9iZ900",
    authDomain: "chat-app-7b002.firebaseapp.com",
    projectId: "chat-app-7b002",
    storageBucket: "chat-app-7b002.appspot.com",
    messagingSenderId: "1071937195050",
    appId: "1:1071937195050:web:82b2eaf3ce8047d3ee8753"
};  

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(auth);