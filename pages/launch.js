import React from "react";
import { StyleSheet, View, Text } from "react-native";
import LoginButton from "../components/LoginButton"
import SignUpButton from "../components/SignUpButton"

function LaunchScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.muyFeliz}>Muy Feliz</Text>
      <Text style={styles.loremIpsum}>Your hobby and baby manager!</Text>
      <LoginButton
        style = {styles.loginButton}
        navigation = {props.navigation}
      ></LoginButton>
      <SignUpButton
        style = {styles.signupButton}
        navigation = {props.navigation}
      ></SignUpButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(144,19,254,1)"
  },
  muyFeliz: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginTop: 213,
    textAlign: 'center'
  },
  loginButton: {
    height: 36,
    width: 128,
    marginTop: 200,
    marginLeft: 121
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: 'center'
  },
  signupButton: {
    height: 36,
    width: 128,
    marginTop: 20,
    marginLeft: 121
  }
});

export default LaunchScreen;