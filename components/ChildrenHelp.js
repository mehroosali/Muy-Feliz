import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width - 20;

function ChildrenHelp(props) {
  return (
    <View style={styles.banner_container}>
      <Text style={styles.title}>Children Screen Instructions</Text>
      <Text style={styles.text}>
        1. This screen is used to manage your children.
      </Text>
      <Text style={styles.text}>
        2. Parents can add a child by clicking the Add Child link on the top.
        This will open up a popup screen where parents can enter basic child
        details like name, DOB, gender and also select a baby image. All fields
        are mandatory to be selected.
      </Text>
      <Text style={styles.text}>
        3. For each child, parents can add tasks related to their child on the
        calendar by clicking the select button on the child card. This will take
        you to the child task screen where parents can enter tasks specific to
        their child needs and select a time for this task. By clicking add to
        calender this will add the task on the home screen calender.
      </Text>
      <Text style={styles.text}>
        4. To edit child details, parents will need to remove their child from
        this screen and add the updated details though the add child option.
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

export default ChildrenHelp;