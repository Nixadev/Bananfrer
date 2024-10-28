// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm3bdZNIk0CX4jiSzdBWGw0iHLyBX8zBc",
  authDomain: "bananfrer.firebaseapp.com",
  projectId: "bananfrer",
  storageBucket: "bananfrer.appspot.com",
  messagingSenderId: "155281298079",
  appId: "1:155281298079:web:31871708a44eeec19088aa",
  measurementId: "G-XXBHKQTQ87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();

// Clicking on a button
document.addEventListener("DOMContentLoaded", () => {
    submit.addEventListener("click", function (event) {

        event.preventDefault(); // Prevent any default form submission behavior

        // initialising the credentials
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const submit = document.getElementById('submit');

        // Signup
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            alert("account created")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage + " || " + errorCode)
         });

        // Login
        
    });
});