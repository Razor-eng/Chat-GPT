import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0WKrBBk7lruWxnFbtTbzRVqYYM2VnKfU",
  authDomain: "chat-ai-r.firebaseapp.com",
  projectId: "chat-ai-r",
  storageBucket: "chat-ai-r.appspot.com",
  messagingSenderId: "635009046562",
  appId: "1:635009046562:web:686a0256298db094cb127b"
};

// Initialize Firebase
const app = getApps().length?getApp():initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};