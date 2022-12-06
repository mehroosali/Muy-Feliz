import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import DatePicker from "react-native-date-picker";

function MaterialFixedLabelDate(props) {
  const [open, setOpen] = useState(false);

  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.label}>{props.label}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setOpen(true)}>
        <Text style={styles.pickDOB}>
          {props.dob.toDateString().substring(4)}
        </Text>
      </TouchableOpacity>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={props.dob}
        onConfirm={(date) => {
          setOpen(false);
          props.setValue(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
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
  button: {
    marginLeft: 40,
    marginBottom: 0,
    marginTop: 10,
  },
  pickDOB: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default MaterialFixedLabelDate;