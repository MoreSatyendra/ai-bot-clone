import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { AuthContext } from "../../navigation/AuthProvider";
import { StatusBar } from "expo-status-bar";

const { width, height } = Dimensions.get("screen");

const Home = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          // backgroundColor: "red",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            padding: 5,
            // backgroundColor: "grey",
            borderRadius: 5,
            borderWidth: 2,
            borderColor: "grey",
          }}
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <MaterialIcons name="vertical-distribute" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{ color: "white" }}>{user.email}</Text>
      </View>
      <TouchableOpacity
        style={{
          padding: 5,
          backgroundColor: "grey",
          borderRadius: 5,
          borderWidth: 2,
          borderColor: "white",
          marginHorizontal: 10,
          marginVertical: 20,
          borderRadius: 15,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          What is hello world in programming
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    width: width,
    paddingHorizontal: 20,
  },
});
