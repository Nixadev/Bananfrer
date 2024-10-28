// Import the necessary Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

// Firebase configuration
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
const auth = getAuth();
const database = getDatabase(app);

// Button and input field references
const signUpBtn = document.getElementById('submitS');
const logInBtn = document.getElementById('submitL');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const usernameInput = document.getElementById('username');
const h1 = document.getElementById('title');

// Sign-Up Function
const signUpUser = () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Account created successfully!");
      saveUserToDatabase(user);
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

// Log-In Function
const logInUser = () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Logged in successfully!");
      console.log("User logged in:", userCredential.user);
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

// Save User Info to Firebase Database
const saveUserToDatabase = (user) => {
  const username = usernameInput.value;

  set(ref(database, 'users/' + user.uid), {
    email: user.email,
    uid: user.uid,
    username: username,
  })
    .then(() => {
      console.log("User data saved in database.");
    })
    .catch((error) => {
      console.error("Database error:", error);
    });
};

// Monitor Authentication State
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in:", user.email);
    h1.innerHTML = "Welcome, " + usernameInput.value;
  } else {
    console.log("No user is signed in.");
  }
});

// Event Listeners for the Sign-Up and Log-In Buttons
signUpBtn.addEventListener("click", (event) => {
  event.preventDefault();
  signUpUser();
});

logInBtn.addEventListener("click", (event) => {
  event.preventDefault();
  logInUser();
});


