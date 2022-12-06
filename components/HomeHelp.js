import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width - 20;

function HomeHelp(props) {
  return (
    <View style={styles.banner_container}>
      <Text style={styles.title}>Home Screen Instructions</Text>
      <Text style={styles.text}>
        1. This screen will show you events on a calender. By default it shows
        events by week. To view any past or future date's event, use the bottom
        knob to expand the calender and click on any particular date.
      </Text>
      <Text style={styles.text}>
        2. The calender shows two kinds of events - Children and Parents
        (Hobbies). Children events are marked with a 'C' and parents with a 'P'.
      </Text>
      <Text style={styles.text}>
        3. To add a children event, use the three lined button on top of the
        screen to open a drawer and select the children tab.
      </Text>
      <Text style={styles.text}>
        4. To add a parent event, use the three lined button on top of the
        screen to open a drawer and select the hobbies tab.
      </Text>
      <Text style={styles.text}>
        5. Once the events have been added, they show up on the calendar you can
        either delete a task or mark it as complete by tapping on the event
        card.
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

export default HomeHelp;