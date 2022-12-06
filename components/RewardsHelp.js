import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width - 20;

function RewardsHelp(props) {
  return (
    <View style={styles.banner_container}>
      <Text style={styles.title}>Rewards Screen Instructions</Text>
      <Text style={styles.text}>
        1. This screen will show you the list of rewards a parent collects by
        completing events.
      </Text>
      <Text style={styles.text}>
        2. When a parent signs up on this app, he or she is awarded with 100
        rewards point and and two reward coupons.
      </Text>
      <Text style={styles.text}>
        3. When an event is completed, 10 reward points are awarded and after
        collecting every 50 points a new reward is unlocked.
      </Text>
      <Text style={styles.text}>
        4. Click on any reward on this screen to see the promo code. Every
        reward has an expiry so make sure to use it before it expires!.
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

export default RewardsHelp;
