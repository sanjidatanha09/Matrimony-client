// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDviHUBnosTBqf9NjAsO9kMR9gvve7zjUU",
    authDomain: "user-email-password-auth-26a72.firebaseapp.com",
    projectId: "user-email-password-auth-26a72",
    storageBucket: "user-email-password-auth-26a72.appspot.com",
    messagingSenderId: "151656029647",
    appId: "1:151656029647:web:479f466c3f7f43f82046ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;