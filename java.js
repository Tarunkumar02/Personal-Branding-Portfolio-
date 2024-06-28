
        
        // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  authDomain: "personal-branding-websit-5298c.firebaseapp.com",
  projectId: "personal-branding-websit-5298c",
  storageBucket: "personal-branding-websit-5298c.appspot.com",
  messagingSenderId: "269955397347",
  appId: "1:269955397347:web:a0bb05af134637be59f7d6",
  measurementId: "G-3Q0FV4VCVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
