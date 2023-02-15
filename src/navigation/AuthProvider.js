import React, { createContext, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await signInWithEmailAndPassword(auth, email, password);
          } catch (error) {
            console.log("catched this error " + error);
          }
        },
        register: async (email, password) => {
          try {
            await createUserWithEmailAndPassword(auth, email, password);
          } catch (error) {
            console.log("catched this error " + error);
          }
        },
        logout: async () => {
          try {
            auth.signOut();
          } catch (error) {
            console.log("signout error " + error);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
