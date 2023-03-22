import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider 
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

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

  export const db = getFirestore();
  
  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    // check if user data does not exist
    // if not, create / set the document with the data from userAuth in my colleciton.    
    if(!userSnapshot.exists()){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    // if so, return userDocRef
    return userDocRef;
  };