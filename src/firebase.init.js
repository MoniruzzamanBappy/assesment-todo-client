// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQvIK2cFqHe3nj9M7jmhK2hnbVF4xONng",
  authDomain: "to-do-list-a63a7.firebaseapp.com",
  projectId: "to-do-list-a63a7",
  storageBucket: "to-do-list-a63a7.appspot.com",
  messagingSenderId: "1042983668541",
  appId: "1:1042983668541:web:cc81bdc809bf256cc29354"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;