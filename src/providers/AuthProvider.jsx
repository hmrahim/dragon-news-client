import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const authContext = createContext(null);
import {
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider()
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const logout = () => {
    return signOut(auth)
  }

  const googleSignIn = (email)=> {
    return signInWithPopup(auth,provider)

  }
  useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=> {
        setUser(currentUser)
    })
    return ()=> unSubscribe()
  },[]);

  

  const authInfo = { createUser, signInUser, resetPassword,user , logout,googleSignIn};

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
