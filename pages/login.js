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

function LoginScreen(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleOnPress = () => {
     if (!validFields()) {
      Alert.alert('Error Login in!', 'Please check the email and password to try again!');
     } else {
      props.navigation.navigate('Home');
    }
  }

  const validFields = () => {
    // if (email == 'mehroosali@gmail.com' && password == 'testuser')
      return true;
    
    //return false;
  }
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/baby_login.png')}  />
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
 
      <TouchableOpacity onPress = {() => props.navigation.navigate('Signup')}>
        <Text style={styles.forgot_button}>SIGN UP</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}  onPress={() => handleOnPress()}>
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
});

export default LoginScreen;