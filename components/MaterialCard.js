import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

  const handleOnPress = (props) => {
    props.navigation.navigate('Event', {events:props.hobby.events});
  }

  const imageNames = {
  chess: require('../assets/images/chess.jpg'),
  football: require('../assets/images/football.jpeg'),
  painting: require('../assets/images/painting.jpg'),
  cooking: require('../assets/images/cooking.jpg'),
  gaming: require('../assets/images/gaming.jpg')
  };

function MaterialCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}>{props.hobby.name}</Text>
          <Text style={styles.subtitleStyle}>{props.hobby.category}</Text>
        </View>
        <Image
          source={imageNames[props.hobby.image]}
          style={styles.cardItemImagePlace}
        ></Image>
      </View>
      <View style={styles.actionBody}>
        <TouchableOpacity style={styles.actionButton1} onPress = {() => handleOnPress(props)}>
          <Text style={styles.actionText1}>SELECT</Text>
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
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  titleStyle: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    height: 100,
    width: 100,
    margin: 16
  },
  actionBody: {
    padding: 8,
    flexDirection: "row"
  },
  actionButton1: {
    padding: 3,
    height: 36,
    marginBottom: 5
  },
  actionText1: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  }
});

export default MaterialCard;
