import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider 
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwC2rQFgQWDVuM1T_7l6MpYzHppULqLZA",
    authDomain: "crwn-clothing-db-d8660.firebaseapp.com",
    projectId: "crwn-clothing-db-d8660",
    storageBucket: "crwn-clothing-db-d8660.appspot.com",
    messagingSenderId: "178025956032",
    appId: "1:178025956032:web:d6b8b24c1a6d3500a06325"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);