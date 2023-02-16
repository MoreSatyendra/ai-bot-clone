import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { AuthContext } from "../../navigation/AuthProvider";
import { StatusBar } from "expo-status-bar";
import axios from "axios";

const { width, height } = Dimensions.get("screen");

const Home = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isMessagePresent, setIsMessagePresent] = useState(false);
  const [think, setThink] = useState(false);
  const { user, logout } = useContext(AuthContext);

  console.log(`Width : ${width} & Height : ${height}`);

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
        onPress={apiCheck}
      >
        <Text style={{ color: "white", textAlign: "center" }}>What is NFT</Text>
      </TouchableOpacity>
      {think ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", marginLeft: 10 }}>Let me think </Text>
          <ActivityIndicator size="small" color="white" />
        </View>
      ) : isMessagePresent ? (
        <View
          style={{
            padding: 10,
            borderColor: "white",
            borderWidth: 1,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>{message}</Text>
        </View>
      ) : null}
      <TouchableOpacity
        style={{
          padding: 5,
          // backgroundColor: "grey",
          borderRadius: 5,
          borderWidth: 2,
          borderColor: "grey",
        }}
        onPress={() => {
          logout();
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Sign Out</Text>
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
