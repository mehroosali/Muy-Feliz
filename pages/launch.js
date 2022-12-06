import React, { useEffect } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import LoginButton from "../components/LoginButton";
import SignUpButton from "../components/SignUpButton";
import { useSelector, useDispatch } from "react-redux";
import { set_login_message_flag } from "../redux/actions";

function LaunchScreen(props) {
  const { login_message_flag } = useSelector(
    (state) => state.loginMessageReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!login_message_flag) {
      dispatch(set_login_message_flag(true));
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.muyFeliz}>Muy Feliz</Text>
      <Text style={styles.loremIpsum}>Your hobby and baby manager!</Text>
      <LoginButton
        style={styles.loginButton}
        navigation={props.navigation}
      ></LoginButton>
      <SignUpButton
        style={styles.signupButton}
        navigation={props.navigation}
      ></SignUpButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "fuchsia",
    flexDirection: "column",
    alignItems: "center",
  },
  muyFeliz: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginTop: 213,
    textAlign: "center",
  },
  loginButton: {
    height: 36,
    width: 128,
    marginTop: 200,
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
  },
  signupButton: {
    height: 36,
    width: 128,
    marginTop: 20,
  },
});

export default LaunchScreen;