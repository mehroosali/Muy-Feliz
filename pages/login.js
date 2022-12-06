import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import { set_current_user } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleOnPress = () => {
    const regEmail = /\S+@\S+\.\S+/;

    if (email.length == 0) {
      Alert.alert("Error logging in", "Email is blank.");
    } else if (!regEmail.test(email)) {
      Alert.alert("Error logging in", "Invalid Email.");
    } else if (password.length == 0) {
      Alert.alert("Error logging in", "Password is blank.");
    } else if (!checkUserExist(email)) {
      Alert.alert("Error logging in", "User does not exist.");
    } else {
      const usr = getUserDetailsFromStore(email);
      if (email == usr.email && password != usr.password) {
        Alert.alert("Error logging in", "Wrong Password.");
      } else {
        dispatch(set_current_user(usr));
        props.navigation.navigate("Home");
      }
    }

    //props.navigation.navigate('Home');
  };

  const getUserDetailsFromStore = (email) => {
    const filter_user_based_on_email = users.filter((u) => u.email == email);
    return filter_user_based_on_email[0];
  };

  const checkUserExist = (email) => {
    return users.some((u) => u.email == email);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/baby_login.png")}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      {/* <TouchableOpacity onPress = {() => props.navigation.navigate('Signup')}>
        <Text style={styles.forgot_button}>SIGN UP</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.loginBtn} onPress={() => handleOnPress()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#FF1493",
  },
  loginText: {
    color: "white",
    fontSize: 15,
  },
});

export default LoginScreen;