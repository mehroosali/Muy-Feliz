import React, { useState } from "react";
import { StyleSheet, View, Modal, Text } from "react-native";
import MaterialFixedLabelTextbox from "./MaterialFixedLabelTextbox";
import MaterialFixedLabelDate from "./MaterialFixedLabelDate";
import MaterialFixedLabelCheckbox from "./MaterialFixedLabelCheckbox";
import MaterialFixedLabelImage from "./MaterialFixedLabelImage";
import MaterialButtonPrimary1 from "./MaterialButtonPrimary1";
import MaterialButtonPink from "./MaterialButtonPink";

function AddChild(props) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState(new Date());
  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
  const [imageUri, setImageUri] = useState("");

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <MaterialFixedLabelImage
          imageUri={imageUri}
          setValue={(image) => setImageUri(image)}
          style={styles.materialFixedLabelTextbox2}
        ></MaterialFixedLabelImage>
        <MaterialFixedLabelTextbox
          label="Name:"
          setValue={(name) => setName(name)}
          style={styles.materialFixedLabelTextbox}
        ></MaterialFixedLabelTextbox>
        <MaterialFixedLabelDate
          label="DOB:"
          dob={dob}
          setValue={(dob) => setDob(dob)}
          style={styles.materialFixedLabelTextbox1}
        ></MaterialFixedLabelDate>
        <MaterialFixedLabelCheckbox
          label="Gender:"
          isMale={isMale}
          isFemale={isFemale}
          setIsMale={(male) => setIsMale(male)}
          setIsFemale={(female) => setIsFemale(female)}
          style={styles.materialFixedLabelTextbox2}
        ></MaterialFixedLabelCheckbox>
        <View style={styles.materialButtonPrimary1Row}>
          <MaterialButtonPrimary1
            style={styles.materialButtonPrimary1}
            name={name}
            dob={dob}
            isMale={isMale}
            isFemale={isFemale}
            imageUri={imageUri}
            setName={(name) => setName(name)}
            setDob={(dob) => setDob(dob)}
            setIsMale={(male) => setIsMale(male)}
            setIsFemale={(female) => setIsFemale(female)}
            setImageUri={(image) => setImageUri(image)}
            onAddChild={(child) => props.onAddChild(child)}
          ></MaterialButtonPrimary1>
          <MaterialButtonPink
            onCancel={props.onCancel}
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
    flexDirection: "column",
    alignItems: "center",
  },
  materialFixedLabelTextbox: {
    height: 43,
    width: 266,
    marginTop: 30,
  },
  materialFixedLabelTextbox1: {
    height: 43,
    width: 266,
    marginTop: 24,
  },
  materialFixedLabelTextbox2: {
    height: 43,
    width: 266,
    marginTop: 26,
  },
  materialButtonPrimary1: {
    height: 36,
    width: 100,
  },
  materialButtonPink: {
    height: 36,
    width: 100,
    marginLeft: 20,
  },
  materialButtonPrimary1Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 54,
  },
});

export default AddChild;
