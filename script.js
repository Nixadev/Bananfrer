// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
  apiKey: "AIzaSyBm3bdZNIk0CX4jiSzdBWGw0iHLyBX8zBc",
  authDomain: "bananfrer.firebaseapp.com",
  projectId: "bananfrer",
  storageBucket: "bananfrer.appspot.com",
  messagingSenderId: "155281298079",
  appId: "1:155281298079:web:31871708a44eeec19088aa",
  measurementId: "G-XXBHKQTQ87"
};*/

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

document.addEventListener("DOMContentLoaded", () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const submit = document.getElementById('submit');

    submit.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent any default form submission behavior
        alert(5);
    });
});