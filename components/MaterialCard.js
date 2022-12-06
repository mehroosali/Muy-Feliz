import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const handleOnPress = (props) => {
  if (props.childScreen) {
    props.navigation.navigate("ChildrenEvent", { name: props.children.name });
  } else {
    props.navigation.navigate("Events", {
      events: props.hobby.events,
      increment_hobby_counter: props.incrementHobbyCounter,
    });
  }
};

function MaterialCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}>
            {props.childScreen ? props.children.name : props.hobby.name}
          </Text>
          <Text style={styles.subtitleStyle}>
            {props.childScreen ? props.children.dob : props.hobby.category}
          </Text>
          <Text style={styles.subtitleStyle}>
            {props.childScreen
              ? props.children.gender
              : props.hobby.events_attending + " events attending"}
          </Text>
        </View>
        <Image
          source={{
            uri: props.children ? props.children.image : props.hobby.image,
          }}
          style={styles.cardItemImagePlace}
        ></Image>
      </View>
      <View style={styles.actionBody}>
        <TouchableOpacity
          style={styles.actionButton1}
          onPress={() => handleOnPress(props)}
        >
          <Text style={styles.actionText1}>SELECT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton1}
          onPress={
            props.childScreen
              ? () => props.onRemoveChild(props.children)
              : () => props.onRemoveHobby(props.hobby)
          }
        >
          <Text style={styles.actionText1}>REMOVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden",
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1,
  },
  titleStyle: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12,
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#000",
    opacity: 0.5,
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    height: 100,
    width: 100,
    margin: 16,
  },
  actionBody: {
    flexDirection: "row",
    paddingBottom: 20,
  },
  actionButton1: {
    height: 40,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  actionText1: {
    fontSize: 20,
    color: "blue",
    opacity: 0.9,
  },
});

export default MaterialCard;
