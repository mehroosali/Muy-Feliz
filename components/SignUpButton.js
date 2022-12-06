import React from "react";
import { StyleSheet, TouchableOpacity, Text, Alert } from "react-native";

function SignUpButton(props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={() => props.navigation.navigate("Signup")}
    >
      <Text style={styles.signup}>SIGNUP</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  signup: {
    color: "rgba(8,32,238,1)",
    fontSize: 14,
    fontFamily: "roboto-700",
  },
});

export default SignUpButton;