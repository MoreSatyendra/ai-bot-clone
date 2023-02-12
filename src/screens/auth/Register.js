import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          position: "absolute",
          borderColor: "grey",
          top: 20,
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
      <Text style={{ color: "white" }}>Register</Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
