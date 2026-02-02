// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpdgQJOwicdXl7-t_W7FB9SPUdAKtUWG4",
  authDomain: "oldencode.firebaseapp.com",
  projectId: "oldencode",
  storageBucket: "oldencode.firebasestorage.app",
  messagingSenderId: "568991060019",
  appId: "1:568991060019:web:224599e3a7f050294dd346",
  measurementId: "G-YGWJ8NBBGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);