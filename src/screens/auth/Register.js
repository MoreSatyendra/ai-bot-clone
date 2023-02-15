import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState, useContext } from "react";
import registerImage from "../../../assets/images/register-bro.png";
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../../navigation/AuthProvider";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          borderColor: "grey",
          marginBottom: 20,
          marginHorizontal: 20,
          alignSelf: "flex-start",
          borderWidth: 2,
          padding: 5,
          borderRadius: 8,
        }}
      >
        <View>
          <AntDesign name="back" size={24} color="white" />
        </View>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={registerImage} style={styles.imgStyle} />
        {/* Register Container */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Let's Sign you up</Text>
          <Text style={{ color: "white", fontSize: 16, marginTop: 10 }}>
            Create an Account.
          </Text>
          <Text style={{ color: "white", fontSize: 13 }}>
            Your virtual friend is READY to talk!
          </Text>
        </View>

        <View style={styles.inputsContainer}>
          <View style={styles.inputs}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="grey"
              style={{ color: "white" }}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
              }}
            />
          </View>
          <View style={styles.inputs}>
            <TextInput
              placeholder="password"
              placeholderTextColor="grey"
              style={{ color: "white" }}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
          </View>
          <View style={styles.inputs}>
            <TextInput
              placeholder="confirm password"
              placeholderTextColor="grey"
              style={{ color: "white" }}
            />
          </View>
        </View>

        {/* Button containers */}
        <View style={styles.btnContainer}>
          <View style={styles.loginContainer}>
            <Text style={styles.loginContainerText}>
              Already you've account?
            </Text>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.loginBtnText}>{"  "}Sign In</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => register(email, password)}>
            <View style={styles.signupBtn}>
              <Text style={styles.signupBtnText}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.orText}>- OR -</Text>
        <View style={styles.socialContainer}>
          <AntDesign name="google" size={24} style={styles.iconStyle} />
          <AntDesign name="github" size={24} style={styles.iconStyle} />
          <AntDesign name="twitter" size={24} style={styles.iconStyle} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

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
    alignSelf: "center",
  },
  signupContainer: {
    marginTop: 30,
  },
  signupText: { color: "white", fontFamily: "Roboto-Bold", fontSize: 22 },
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
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  loginContainerText: {
    fontSize: 14,
    color: "grey",
    textAlign: "center",
  },
  loginBtn: { alignItems: "center", justifyContent: "center" },
  loginBtnText: { fontSize: 14, color: "white", textAlign: "center" },
  signupBtn: {
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 2,
  },
  signupBtnText: {
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
