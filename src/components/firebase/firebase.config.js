// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSOv-UrY5m_zWR8-T7wGiVphsZkmTZl9Q",
  authDomain: "coffe-store-ed89b.firebaseapp.com",
  projectId: "coffe-store-ed89b",
  storageBucket: "coffe-store-ed89b.appspot.com",
  messagingSenderId: "232709864455",
  appId: "1:232709864455:web:2a2e8d4429eca57d35bea2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
