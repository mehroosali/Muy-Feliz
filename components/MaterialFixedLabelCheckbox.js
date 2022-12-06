import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CheckBox from "@react-native-community/checkbox";

function MaterialFixedLabelCheckbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.checkboxes}>
        <CheckBox
          style={styles.maleCheckbox}
          disabled={false}
          value={props.isMale}
          onValueChange={(newValue) => {
            if (props.isFemale) {
              props.setIsFemale(!props.isFemale);
            }
            props.setIsMale(newValue);
          }}
        />
        <Text style={styles.checkbox_text}>Male</Text>
        <CheckBox
          style={styles.femaleCheckbox}
          disabled={false}
          value={props.isFemale}
          onValueChange={(newValue) => {
            if (props.isMale) {
              props.setIsMale(!props.isMale);
            }
            props.setIsFemale(newValue);
          }}
        />
        <Text style={styles.checkbox_text}>Female</Text>
      </View>
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
  button: {
    marginLeft: 40,
    marginBottom: 0,
    marginTop: 10,
  },
  checkboxes: {
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 10,
  },
  checkbox_text: {
    marginTop: 5,
  },
});

export default MaterialFixedLabelCheckbox;