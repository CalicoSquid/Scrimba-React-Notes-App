
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAhditw4TbwtMWQBD8GQ0u7_cmceHmv8SA",
  authDomain: "react-notes-7e98c.firebaseapp.com",
  projectId: "react-notes-7e98c",
  storageBucket: "react-notes-7e98c.appspot.com",
  messagingSenderId: "1092159285488",
  appId: "1:1092159285488:web:831d26ec0f2fbba4c83a35"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")