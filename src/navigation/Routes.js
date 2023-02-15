import React, { useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./Appstack";
import { AuthContext } from "./AuthProvider";
import { auth } from "../../firebaseConfig";
import AuthStack from "./AuthStack";

const Routes = () => {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        const uid = user.uid;
        console.log("user Id " + uid);
      } else {
        setUser(null);
        console.log("user sign out");
      }
    });
  }, [user]);

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
