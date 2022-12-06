import React, { useEffect } from "react";
import { View, FlatList, StyleSheet, Alert, Button } from "react-native";
import { Card, Button as B1, Title, Paragraph } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { add_event } from "../redux/actions";
import urid from "urid";

const monthMap = {
  JAN: 1,
  FEB: 2,
  MAR: 3,
  APR: 4,
  MAY: 5,
  JUN: 6,
  JUL: 7,
  AUG: 8,
  SEP: 9,
  OCT: 10,
  NOV: 11,
  DEC: 12,
};

function EventScreen(props) {
  const { calender_events } = useSelector((state) => state.calenderReducer);
  const { current_user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleOnPress = (item) => {
    const event = {};
    event["id"] = urid();
    event["task"] = item.title;
    event["task_label"] = "P";
    event["completed"] = false;
    const date_tokens = item.date.split(" ");
    event["time"] = date_tokens[4].concat(" ", date_tokens[5]);
    event["date"] = "2022".concat(
      "-",
      monthMap[date_tokens[1]],
      "-",
      date_tokens[2]
    );
    event["user"] = current_user.email;
    if (!validateEvent(event.date, event.time)) {
      props.route.params.increment_hobby_counter(item.hobby_id);
      dispatch(add_event(event));
      Alert.alert(
        "Task added to Calender",
        "Add more tasks or navigate to other pages.",
        [
          {
            text: "Add More",
            onPress: () => {},
            style: "cancel",
          },
          {
            text: "Go to Home",
            onPress: () => props.navigation.getParent().navigate("Home"),
          },
          {
            text: "Go to Children",
            onPress: () => props.navigation.getParent().navigate("Children"),
          },
        ]
      );
    } else {
      Alert.alert(
        "Schedule Conflict!!",
        "Please choose another event or complete tasks at chosen time."
      );
    }
  };
  const validateEvent = (date, time) => {
    return calender_events.some(
      (event) => event.date == date && event.time == time
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      props.navigation.getParent().setOptions({ headerShown: false });
      return () => {
        props.navigation.getParent().setOptions({ headerShown: true });
      };
    }, [])
  );

  useEffect(
    React.useCallback(() => {
      props.navigation.setOptions({
        headerRight: () => (
          <View style={{ marginRight: 0 }}>
            <Button
              title="Home"
              onPress={() => props.navigation.getParent().navigate("Home")}
              color="#00cc00"
            />
          </View>
        ),
      });
    }, [props.navigation])
  );

  const renderItem = ({ item }) => (
    <Card style={styles.card_container}>
      <Card.Content>
        <Title>{item.title}</Title>
      </Card.Content>
      <Card.Cover source={{ uri: item.img }} />
      <Card.Content>
        <Paragraph>{item.date}</Paragraph>
        <Paragraph>{item.location}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <B1 color="blue" onPress={() => handleOnPress(item)}>
          Add to Calender
        </B1>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={props.route.params.events}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card_container: {
    alignContent: "center",
    margin: 37,
  },
});

export default EventScreen;