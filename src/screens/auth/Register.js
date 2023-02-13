import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import registerImage from "../../../assets/images/register-bro.png";
import { AntDesign } from "@expo/vector-icons";

const Register = ({ navigation }) => {
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
      <Image
        source={registerImage}
        style={{
          width: 250,
          height: 250,
          resizeMode: "contain",
          borderRadius: 15,
        }}
      />
      {/* Register Container */}
      <View
        style={{
          alignSelf: "flex-start",
          marginHorizontal: 30,
          marginTop: 40,
        }}
      >
        <Text
          style={{ color: "white", fontFamily: "Roboto-Bold", fontSize: 22 }}
        >
          Let's Sign you up
        </Text>
        <Text style={{ color: "white", fontSize: 16, marginTop: 10 }}>
          Create an Account.
        </Text>
        <Text style={{ color: "white", fontSize: 13 }}>
          Your virtual friend is READY to talk!
        </Text>
      </View>

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
            marginBottom: 15,
          }}
        >
          <TextInput
            placeholder="pass"
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
            marginBottom: 15,
          }}
        >
          <TextInput
            placeholder="con-pass"
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
            Don't tell me. You just come here to explore?
          </Text>
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={{ fontSize: 14, color: "white", textAlign: "center" }}>
              {"  "}Sign In
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
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
              Sign Up
            </Text>
          </View>
        </TouchableOpacity>
      </View>
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
});
