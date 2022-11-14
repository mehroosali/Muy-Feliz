import React, { useState } from "react";
import { StyleSheet, View, Modal } from "react-native";
import MaterialFixedLabelTextbox from "./MaterialFixedLabelTextbox";
import MaterialButtonPrimary1 from "./MaterialButtonPrimary1";
import MaterialButtonPink from "./MaterialButtonPink";

function AddChild(props) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.container}>
                <MaterialFixedLabelTextbox
                    label='Name:'
                    setValue = {(name) => setName(name)}
        style={styles.materialFixedLabelTextbox}
      ></MaterialFixedLabelTextbox>
                <MaterialFixedLabelTextbox
                    label='Age:'
                    setValue = {(age) => setAge(age)}
        style={styles.materialFixedLabelTextbox1}
      ></MaterialFixedLabelTextbox>
                <MaterialFixedLabelTextbox
                    label='Gender:'
                    setValue = {(gender) => setGender(gender)}
        style={styles.materialFixedLabelTextbox2}
      ></MaterialFixedLabelTextbox>
      <View style={styles.materialButtonPrimary1Row}>
        <MaterialButtonPrimary1
                        style={styles.materialButtonPrimary1}
                        name={name}
                        age={age}
                        gender={gender}
                        onAddChild = {(child) => props.onAddChild(child)}
        ></MaterialButtonPrimary1>
        <MaterialButtonPink
        onCancel = {props.onCancel}
        style={styles.materialButtonPink}
        ></MaterialButtonPink>
      </View>
    </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  materialFixedLabelTextbox: {
    height: 43,
    width: 266,
    marginTop: 116,
  },
  materialFixedLabelTextbox1: {
    height: 43,
    width: 266,
    marginTop: 24
  },
  materialFixedLabelTextbox2: {
    height: 43,
    width: 266,
    marginTop: 26
  },
  materialButtonPrimary1: {
    height: 36,
    width: 100
  },
  materialButtonPink: {
    height: 36,
    width: 100,
    marginLeft: 20
  },
  materialButtonPrimary1Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 54
  }
});

export default AddChild;