// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { getDatabase, ref, set,  } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm3bdZNIk0CX4jiSzdBWGw0iHLyBX8zBc",
  authDomain: "bananfrer.firebaseapp.com",
  projectId: "bananfrer",
  storageBucket: "bananfrer.appspot.com",
  messagingSenderId: "155281298079",
  appId: "1:155281298079:web:31871708a44eeec19088aa",
  measurementId: "G-XXBHKQTQ87",
  databaseURL: "https://bananfrer-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();

const database = getDatabase(app);

//submit btn
const submit = document.getElementById('submit');


// Clicking on a button
submit.addEventListener("click", function (event) {


        event.preventDefault(); // Prevent any default form submission behavior

        // initialising the credentials
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

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

      auth.onAuthStateChanged(function(user) {

      var username = document.getElementById('username').value;
    
      if (user) {
        database.ref('users/' + user.uid).set({
          email: user.email,
          uid : user.uid,
          username: username
        });
    
    
        console.log("User is signed in.");
      } else {
         console.log("No user is signed in.");
    
      }
    });