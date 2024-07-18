import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const FirebaseContext = createContext(null);

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyDw_skMsqjtOR4tT8DhqOEfQmsEAANn6eo",
  authDomain: "bookify-4c7c3.firebaseapp.com",
  projectId: "bookify-4c7c3",
  storageBucket: "bookify-4c7c3.appspot.com",
  messagingSenderId: "975134752409",
  appId: "1:975134752409:web:1024eecd1079e710d78208",
};

export const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setuser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setuser(user);
      else setuser(null);
    });
  });

  const signInUserWithEmailAndPass = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const signUpUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signinWithGoogle = () => signInWithPopup(firebaseAuth, provider);

  const isLoggedIn=user ? true :false

  return (
    <FirebaseContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        signInUserWithEmailAndPass,
        signinWithGoogle,
        isLoggedIn
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
