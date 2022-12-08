import React, { useState } from "react";
import { StyleSheet, View, Button, Modal } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { HOBBIES_EVENTS_LIST } from "../utils/hobbies_events";

const hobbies = HOBBIES_EVENTS_LIST;

function AddHobby(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Chess", value: "Chess" },
    { label: "Football", value: "Football" },
    { label: "Painting", value: "Painting" },
    { label: "Gaming", value: "Gaming" },
    { label: "Cooking", value: "Cooking" },
  ]);

  const handleOnPress = () => {
    const selectedHobby = hobbies.filter((hobby) => hobby.name == value);
    props.onAddHobby(selectedHobby[0]);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <View style={styles.button_container}>
          <Button color="deeppink" title="Add" onPress={() => handleOnPress()} />
          <Button
            color="deeppink"
            style={styles.button}
            title="Cancel"
            onPress={props.onCancel}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button_container: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
    width: "35%",
  },
});

export default AddHobby;
