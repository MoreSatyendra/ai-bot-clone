import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import loginImage from "../../../assets/images/Sign-in-bro.png";
import { AntDesign } from "@expo/vector-icons";
import LoadingIndicator from "../../component/LoadingIndicator";

const { width, height } = Dimensions.get("screen");

const Login = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={loginImage}
        style={{
          width: 250,
          height: 250,
          resizeMode: "contain",
          borderRadius: 15,
          marginVertical: 40,
        }}
      />
      {/* Welcome COntainer */}
      <View style={{ alignSelf: "flex-start", marginHorizontal: 30 }}>
        <Text
          style={{ color: "white", fontFamily: "Roboto-Bold", fontSize: 22 }}
        >
          Let's Sign you in
        </Text>
        <Text style={{ color: "white", fontSize: 16, marginTop: 10 }}>
          Welcome back.
        </Text>
        <Text style={{ color: "white", fontSize: 13 }}>
          You've been missed!
        </Text>
      </View>

      {visible && <LoadingIndicator />}
      {/* Login Inputs */}
      <View
        style={{
          marginVertical: 20,
          width: 320,
        }}
      >
        <View
          style={{
            borderWidth: 2,
            borderColor: "grey",
            borderRadius: 10,
            paddingVertical: 5,
            paddingHorizontal: 15,
            marginBottom: 15,
          }}
        >
          <TextInput
            placeholder="Email"
            placeholderTextColor="grey"
            style={{ color: "white" }}
          />
        </View>
        <View
          style={{
            borderWidth: 2,
            borderColor: "grey",
            borderRadius: 10,
            paddingHorizontal: 15,
            paddingVertical: 5,
          }}
        >
          <TextInput
            placeholder="pass"
            placeholderTextColor="grey"
            style={{ color: "white" }}
          />
        </View>
      </View>

      {/* Button containers */}
      <View
        style={{
          position: "absolute",
          bottom: 40,
          width: 320,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "grey",
              textAlign: "center",
            }}
          >
            Wait! Are you NEW to app?
          </Text>
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={{ fontSize: 14, color: "white", textAlign: "center" }}>
              {"  "}Register
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            setVisible(!visible);
            console.log("button Pressed " + visible);
          }}
        >
          <View
            style={{
              paddingVertical: 10,
              backgroundColor: "white",
              borderRadius: 2,
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto-Bold",
                fontSize: 14,
                textAlign: "center",
              }}
            >
              Sign In
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
});
