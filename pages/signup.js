import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { add_user } from "../redux/actions";
import { launchImageLibrary } from "react-native-image-picker";

function SignupScreen(props) {
  const [inputs, setInputs] = useState({
    email: "",
    fullname: "",
    phone: "",
    password: "",
    imageUri: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  const checkUserExist = (email) => {
    return users.some((u) => u.email == email);
  };

  const openPicker = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    launchImageLibrary(options, (response) => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
        alert(response.customButton);
      } else {
        handleOnchange(response.assets[0].uri, "imageUri");
        Alert.alert("Profile photo selected.");
      }
    });
  };

  const handleOnPress = () => {
    Keyboard.dismiss();
    let isValid = true;
    handleError("", "email");
    handleError("", "fullname");
    handleError("", "phone");
    handleError("Select a photo or skip", "imageUri");

    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please input a valid email", "email");
      isValid = false;
    } else if (checkUserExist(inputs.email)) {
      handleError("User already exist", "email");
      isValid = false;
    }
    if (!inputs.fullname) {
      handleError("Please input name", "fullname");
      isValid = false;
    } else if (!inputs.fullname.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
      handleError("Please input a valid fullname", "fullname");
      isValid = false;
    }

    if (!inputs.phone) {
      handleError("Please input phone number", "phone");
      isValid = false;
    } else if (!inputs.phone.match(/^\d{10}$/)) {
      handleError("Please input a valid phone number", "phone");
      isValid = false;
    }

    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError("Min password length should be 5", "password");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    const new_user = {};
    new_user["email"] = inputs.email;
    new_user["password"] = inputs.password;
    new_user["name"] = inputs.fullname;
    new_user["imageUri"] = inputs.imageUri;
    dispatch(add_user(new_user));
    Alert.alert("User Registered", "User can now login.");
    props.navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          value={inputs.email}
          style={styles.TextInput_email}
          placeholder="Enter your email address"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => handleOnchange(text, "email")}
        />
      </View>
      {errors["email"] && (
        <Text style={styles.textError}>{errors["email"]}</Text>
      )}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput_name}
          placeholder="Enter Full Name"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => handleOnchange(text, "fullname")}
        />
      </View>
      {errors["fullname"] && (
        <Text style={styles.textError}>{errors["fullname"]}</Text>
      )}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput_phone}
          placeholder="Enter your phone no."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => handleOnchange(text, "phone")}
        />
      </View>
      {errors["phone"] && (
        <Text style={styles.textError}>{errors["phone"]}</Text>
      )}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput_password}
          placeholder="Enter your password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => handleOnchange(text, "password")}
        />
      </View>
      {errors["password"] && (
        <Text style={styles.textError}>{errors["password"]}</Text>
      )}
      <View style={styles.inputView}>
        <TouchableOpacity style={styles.button} onPress={() => openPicker()}>
          <Text style={styles.pickImage}>Select Profile Photo (Optional)</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => handleOnPress()}>
        <Text style={styles.loginText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 50,
    marginTop: 20,
  },

  TextInput_email: {
    height: 50,
    padding: 10,
    marginLeft: 20,
  },
  TextInput_name: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  TextInput_phone: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  TextInput_password: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    backgroundColor: "#FF1493",
  },
  forgot_button: {
    height: 30,
    marginTop: 30,
    textDecorationLine: "underline",
    color: "blue",
    fontSize: 18,
  },
  textError: {
    color: "red",
  },
  button: {
    marginLeft: 30,
    marginTop: 15,
  },
  pickImage: {
    color: "#003f5c",
  },
  loginText: {
    color: "white",
    fontSize: 15,
  },
});

export default SignupScreen;