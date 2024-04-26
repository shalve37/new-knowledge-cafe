// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA89bBISRPK9fNLy1RygpHeODC55M5yT7s",
  authDomain: "new-knowledge-cafe.firebaseapp.com",
  projectId: "new-knowledge-cafe",
  storageBucket: "new-knowledge-cafe.appspot.com",
  messagingSenderId: "364312145203",
  appId: "1:364312145203:web:0b3090ed8a87158abe6246",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
