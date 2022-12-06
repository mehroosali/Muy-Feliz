import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width - 20;

function HobbiesHelp(props) {
  return (
    <View style={styles.banner_container}>
      <Text style={styles.title}>Hobbies Screen Instructions</Text>
      <Text style={styles.text}>
        1. This screen shows the list of hobbies a parent is interested to
        pursue.
      </Text>
      <Text style={styles.text}>
        2. Parents can add a hobby by clicking the add hobby link which will
        open a popup with a dropdown containing a list of hobbies to choose
        from. Click on Add button to add the hobby to this screen or click
        Cancel button to return to this screen.
      </Text>
      <Text style={styles.text}>
        3. The hobby card shows details such a hobby name, category and number
        of events the parent is currently attending.
      </Text>
      <Text style={styles.text}>
        4. After adding a hobby parents can choose events to attend related to
        this hobby by clicking on Select button on the hobby card. This will
        navigate to hobby events page where the parent can add interested events
        on the calender by clicking Add to Calender button.
      </Text>
      <Text style={styles.text}>
        5. Parents also have the option to remove a hobby and cannot add same
        hobby twice.
      </Text>

      <Text style={styles.text_help}>
        For any other help or query, contact Team 7 HCI at
        team7muyfeliz@gmail.com.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner_container: {
    flexDirection: "column",
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  text: {
    width: windowWidth,
  },
  text_help: {
    width: windowWidth,
    marginTop: 10,
  },
});

export default HobbiesHelp;