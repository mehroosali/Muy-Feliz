import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import urid from "urid";

import DatePicker from "react-native-date-picker";
import { useDispatch, useSelector } from "react-redux";
import { add_event } from "../redux/actions";
import { Alert } from "react-native";

function ChildEventScreen(props) {
  const [task, setTask] = useState("");
  const [selected_date, setSelected_date] = useState(new Date());
  const [current_date, setCurrent_date] = useState(new Date());
  const [open, setOpen] = useState(false);
  const { calender_events } = useSelector((state) => state.calenderReducer);
  const { current_user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(
    React.useCallback(() => {
      props.navigation.setOptions({
        headerRight: () => (
          <View style={{ marginRight: 0 }}>
            <Button
              title="Home"
              onPress={() => props.navigation.getParent().navigate("Home")}
              color="hotpink"
            />
          </View>
        ),
      });
    }, [props.navigation])
  );

  const handleOnPress = () => {
    const event = {};
    event["id"] = urid();
    const taskName = props.route.params.name.concat(": ", task);
    event["task"] = taskName;
    event["task_label"] = "C";
    event["completed"] = false;
    let hours = selected_date.getHours();
    let AmOrPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    let minutes = selected_date.getMinutes().toString();
    if (minutes.length == 1) {
      minutes = "0" + minutes;
    }
    let year = selected_date.getFullYear().toString();
    let month = (selected_date.getMonth() + 1).toString();
    let date = selected_date.getDate().toString();
    if (date.length == 1) {
      date = "0" + date;
    }
    event["time"] = hours.toString().concat(":", minutes, " ", AmOrPm);
    event["date"] = year.concat("-", month, "-", date);

    if (doesScheduleConflicts(event.date, event.time)) {
      Alert.alert(
        "Schedule Conflict!!",
        "Please choose another event or complete tasks at chosen time."
      );
    } else if (selected_date < current_date) {
      Alert.alert("Passed time selected", "Please choose a time in future.");
    } else if (task.length == 0) {
      Alert.alert("Task cannot be empty!", "Please enter a task.");
    } else {
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
            text: "Go to Hobbies",
            onPress: () => props.navigation.getParent().navigate("Parent"),
          },
        ]
      );
    }
  };
  const doesScheduleConflicts = (date, time) => {
    return calender_events.some(
      (event) => event.date == date && event.time == time
    );
  };

  const display_date = () => {
    let hours = selected_date.getHours();
    let AmOrPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    let minutes = selected_date.getMinutes().toString();
    if (minutes.length == 1) {
      minutes = "0" + minutes;
    }
    const time = hours.toString().concat(":", minutes, " ", AmOrPm);
    const year = selected_date.getFullYear().toString();
    const month = (selected_date.getMonth() + 1).toString();
    const day = selected_date.getDate().toString();
    const date = month.concat("/", day, "/", year);

    return date + " " + time;
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/childscreenimg.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.rect}>
        <Text style={styles.loremIpsum}>
          Remember something scheduled {"\n"}for your child ? Enter it here !
        </Text>
        <TextInput
          placeholder="Type out here!"
          style={styles.placeholder}
          onChangeText={(task) => setTask(task)}
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={() => setOpen(true)}>
          <Text style={styles.addToCalender}>Select Date</Text>
        </TouchableOpacity>
        <DatePicker
          modal
          open={open}
          date={selected_date}
          onConfirm={(date) => {
            setOpen(false);
            setSelected_date(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <Text style={styles.date_text}>{display_date()}</Text>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => handleOnPress()}
        >
          <Text style={styles.addToCalender}>Add to Calender</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor:'white'
  },
  image: {
    width: 235,
    height: 270,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 10,
  },
  rect: {
    width: 235,
    height: 300,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 20,
    alignItems: "center",
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "blue",
    fontSize: 15,
    marginTop: 32,
    marginLeft: 5,
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 50,
    width: 178,
    lineHeight: 16,
    borderWidth: 1,
    borderColor: "blue",
    fontSize: 16,
    marginTop: 13,
  },
  button: {
    width: 131,
    height: 38,
    backgroundColor: "deeppink",
    borderWidth: 1,
    borderColor: "blue",
    marginTop: 15,
  },
  button2: {
    width: 160,
    height: 38,
    backgroundColor: "deeppink",
    borderWidth: 1,
    borderColor: "blue",
    marginTop: 20,
  },
   addToCalender: {
    fontFamily: "roboto-regular",
    color: "white",
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15
  },
  date_text: {
    fontSize: 15,
    color: "blue",
    marginTop: 10,
  },
});

export default ChildEventScreen;