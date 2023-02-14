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
  const [isVisible, setIsVisible] = useState(false);

  const showLoading = () => {
    setIsVisible(true);
  };

  return (
    <View style={styles.container}>
      {isVisible ? (
        <View style={[styles.container, { justifyContent: "center" }]}>
          <LoadingIndicator size={100} />
        </View>
      ) : (
        <>
          <Image source={loginImage} style={styles.imgStyle} />
          {/* Welcome COntainer */}
          <View style={styles.welcomeContainer}>
            <Text style={styles.signText}>Let's Sign you in</Text>
            <Text style={styles.welcomeText}>Welcome back.</Text>
            <Text style={styles.subText}>You've been missed!</Text>
          </View>

          {/* Login Inputs */}
          <View style={styles.inputsContainer}>
            <View style={styles.inputs}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="grey"
                style={{ color: "white" }}
              />
            </View>
            <View style={styles.inputs}>
              <TextInput
                placeholder="pass"
                placeholderTextColor="grey"
                style={{ color: "white" }}
              />
            </View>
          </View>

          {/* Button containers */}
          <View style={styles.btnContainer}>
            <View style={styles.registerContainer}>
              <Text style={styles.registerTitle}>
                Wait! Are you NEW to app?
              </Text>
              <TouchableOpacity
                style={styles.registerBtn}
                onPress={() => {
                  navigation.push("Register");
                }}
              >
                <Text style={styles.registerText}>{"  "}Register</Text>
              </TouchableOpacity>
            </View>

            {/* Sign In btn */}
            <TouchableOpacity onPress={showLoading}>
              <View style={styles.signinBtnContainer}>
                <Text style={styles.signBtnText}>Sign In</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.orText}>- OR -</Text>
            <View style={styles.socialContainer}>
              <AntDesign name="google" size={24} style={styles.iconStyle} />
              <AntDesign name="github" size={24} style={styles.iconStyle} />
              <AntDesign name="twitter" size={24} style={styles.iconStyle} />
            </View>
          </View>
        </>
      )}
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
  imgStyle: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    borderRadius: 15,
    marginVertical: 40,
  },
  welcomeContainer: { alignSelf: "flex-start", marginHorizontal: 30 },
  signText: { color: "white", fontFamily: "Roboto-Bold", fontSize: 22 },
  welcomeText: { color: "white", fontSize: 16, marginTop: 10 },
  subText: { color: "white", fontSize: 13 },
  inputsContainer: {
    marginVertical: 20,
    width: 320,
  },
  inputs: {
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  btnContainer: {
    width: 320,
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  registerTitle: {
    fontSize: 14,
    color: "grey",
    textAlign: "center",
  },
  registerText: { fontSize: 14, color: "white", textAlign: "center" },
  registerBtn: { alignItems: "center", justifyContent: "center" },
  signinBtnContainer: {
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 2,
  },
  signBtnText: {
    fontFamily: "Roboto-Bold",
    fontSize: 14,
    textAlign: "center",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    borderWidth: 1,
    borderColor: "grey",
    paddingTop: 11.8,
    paddingBottom: 10,
    paddingLeft: 11.8,
    paddingRight: 10,
    borderRadius: 8,
    marginHorizontal: 10,
    color: "grey",
  },
  orText: {
    color: "grey",
    textAlign: "center",
    paddingVertical: 15,
  },
});
