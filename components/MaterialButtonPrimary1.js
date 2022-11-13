import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import urid from 'urid';

function MaterialButtonPrimary1(props) {

  const handleOnPress = (name, age, gender) => {
    const child = {};
    child['id'] = urid();
    child['name'] = name;
    child['age'] = age;
    child['gender'] = gender;
    child['image'] = 'other';
    props.onAddChild(child);
  }
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress = {()=>handleOnPress(props.name, props.age, props.gender)}>
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
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  caption: {
    color: "#fff",
    fontSize: 14
  }
});

export default MaterialButtonPrimary1;
