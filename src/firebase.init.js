// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAavpBA3a6ydIap1FhKo-wITQ3siDzyrvU",
  authDomain: "assignment-10-1e27c.firebaseapp.com",
  projectId: "assignment-10-1e27c",
  storageBucket: "assignment-10-1e27c.appspot.com",
  messagingSenderId: "511087469378",
  appId: "1:511087469378:web:bed1a500a7278c73a85edb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
