import React from "react";
import { StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import urid from "urid";
import { useSelector } from "react-redux";

function MaterialButtonPrimary1(props) {
  const { current_user } = useSelector((state) => state.userReducer);

  const handleOnPress = () => {
    const regName = /^[a-zA-Z]+$/;

    if (!regName.test(props.name)) {
      Alert.alert("Invalid Name", "Please enter a proper first name.");
    } else if (!validDates()) {
      Alert.alert("Invalid Date of Birth", "Please enter a date before today.");
    } else if (!props.isMale && !props.isFemale) {
      Alert.alert("No gender selected", "Select a gender.");
    } else if (props.imageUri.length == 0) {
      Alert.alert("No image selected", "image must be selected.");
    } else {
      addChild();
    }
  };

  const validDates = () => {
    const current_date_time = new Date();
    if (props.dob > current_date_time) {
      return false;
    }
    return true;
  };

  const addChild = () => {
    const child = {};
    child["id"] = urid();
    child["name"] = props.name;
    child["dob"] = props.dob.toDateString().substring(4);
    child["gender"] = props.isMale ? "Male" : "Female";
    child["image"] = props.imageUri;
    child["user"] = current_user.email;
    Alert.alert("Add a new Child", "Confirm or cancel.", [
      {
        text: "OK",
        onPress: () => {
          props.setName("");
          props.setDob(new Date());
          props.setIsMale(false);
          props.setIsFemale(false);
          props.setImageUri("");
          props.onAddChild(child);
        },
      },
      {
        text: "Cancel",
        onPress: () => {
          props.setName("");
          props.setDob(new Date());
          props.setIsMale(false);
          props.setIsFemale(false);
          props.setImageUri("");
        },
        style: "cancel",
      },
    ]);
  };

  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={() => handleOnPress()}
    >
      <Text style={styles.caption}>ADD</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2196F3",
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
  caption: {
    color: "#fff",
    fontSize: 14,
  },
});

export default MaterialButtonPrimary1;
