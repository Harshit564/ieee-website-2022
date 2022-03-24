import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getAuth } from "firebase/auth";
import { getAuth, GoogleAuthProvider, getRedirectResult, signInWithRedirect } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBffHnphzR6ZO8sj9E_S0wauOe2huCt-6U",
  authDomain: "ieee-website-dbc20.firebaseapp.com",
  projectId: "ieee-website-dbc20",
  storageBucket: "ieee-website-dbc20.appspot.com",
  messagingSenderId: "701476162023",
  appId: "1:701476162023:web:08f560b5ea27d0e7c65542",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  const auth = getAuth();
  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
