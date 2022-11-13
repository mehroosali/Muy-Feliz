import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import { useDispatch } from 'react-redux';

function SignupScreen(props) {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleOnPress = () => {
      Alert.alert('Sign Up functionality not available!', 'This App currently supports user mehroosali@gmail.com only. Login with those credentials.');
      props.navigation.navigate('Login');
    }
  
  return (
    <View style={styles.container}>
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name."
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
      </View>
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Age."
          placeholderTextColor="#003f5c"
          onChangeText={(age) => setAge(age)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Gender."
          placeholderTextColor="#003f5c"
          onChangeText={(gender) => setGender(gender)}
        />
      </View>
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
      <TouchableOpacity onPress = {() => props.navigation.navigate('Login')}>
        <Text style={styles.forgot_button}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}  onPress={() => handleOnPress()}>
        <Text style={styles.loginText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
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
    marginTop: 10
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20
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
  forgot_button: {
    height: 30,
    marginBottom: 30
  }
});

export default SignupScreen;