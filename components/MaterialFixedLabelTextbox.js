import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function MaterialFixedLabelTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        placeholder="Enter First Name"
        style={styles.inputStyle}
        onChangeText={(value) => props.setValue(value)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    paddingLeft: 16,
  },
  label: {
    fontSize: 16,
    lineHeight: 16,
    paddingTop: 16,
    paddingBottom: 8,
    color: "#000",
    opacity: 0.5,
    alignSelf: "flex-start",
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    fontSize: 18,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 14,
    paddingBottom: 8,
    paddingLeft: 30,
  },
});

export default MaterialFixedLabelTextbox;