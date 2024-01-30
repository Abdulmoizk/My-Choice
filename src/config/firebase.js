import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,signInWithPopup,onAuthStateChanged, signOut  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLVZxIQ3Y9Z2ftJCdXm3LL5aq9YNH_Zz4",
  authDomain: "my-choice-1997.firebaseapp.com",
  projectId: "my-choice-1997",
  storageBucket: "my-choice-1997.appspot.com",
  messagingSenderId: "586553714818",
  appId: "1:586553714818:web:d1a52fac4baf1cee542c9b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();



export {
    auth,
    provider,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged ,
signOut,

    
}