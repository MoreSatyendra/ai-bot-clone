import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Login, Home, Register } from "../screens";
import CustomDrawer from "../component/CustomDrawer";

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: "back",
        drawerActiveTintColor: "#3d0000",
        drawerActiveBackgroundColor: "#950101",
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      {/* <Drawer.Screen name="Article" /> */}
    </Drawer.Navigator>
  );
};

export default AppStack;
