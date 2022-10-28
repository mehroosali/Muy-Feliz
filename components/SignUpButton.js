import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function SignUpButton(props) {
  return (
      <TouchableOpacity style={[styles.container, props.style]}
      onPress = {() => props.navigation.navigate('Home')} >
      <Text style={styles.signup}>SIGNUP</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(86,74,226,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  signup: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "roboto-700"
  }
});

export default SignUpButton;
