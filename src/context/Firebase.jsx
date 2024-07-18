import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyDw_skMsqjtOR4tT8DhqOEfQmsEAANn6eo",
  authDomain: "bookify-4c7c3.firebaseapp.com",
  projectId: "bookify-4c7c3",
  storageBucket: "bookify-4c7c3.appspot.com",
  messagingSenderId: "975134752409",
  appId: "1:975134752409:web:1024eecd1079e710d78208",
};

export const app = initializeApp(firebaseConfig);

export const useFirebase = ()=> useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  return <FirebaseContext.Provider>{props.children}</FirebaseContext.Provider>;
};
