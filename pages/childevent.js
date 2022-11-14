import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
TouchableOpacity
} from "react-native";
import urid from 'urid';

import DatePicker from 'react-native-date-picker';
import { useDispatch, useSelector } from 'react-redux';
import { add_event } from '../redux/actions';
import { Alert } from 'react-native';

function ChildEventScreen(props) {
    const [task, setTask] = useState("");
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const { calender_events } = useSelector(state => state.calenderReducer);
    const dispatch = useDispatch();

    const handleOnPress = () => {
      const event = {};
      event['id'] = urid();
      const taskName = props.route.params.name.concat(": ", task);
      event['task'] = taskName;
      event['task_label'] = 'C';
      event['completed'] = false;
      let hours = date.getHours();
      let AmOrPm = hours >= 12 ? 'PM' : 'AM';
      hours = (hours % 12) || 12;
      event['time'] = hours.toString().concat(":", date.getMinutes().toString(), " ",AmOrPm);
      event['date'] = date.getFullYear().toString().concat("-", (date.getMonth() + 1).toString(), "-", date.getDate().toString());
      
    if (!validateEvent(event.date, event.time)) {
          dispatch(add_event(event));
          Alert.alert('Task added to Calender', 'Check home screen calender.');
        } else {
          Alert.alert('Schedule Conflict!!', 'Please choose another event or complete tasks at chosen time.');
        }
    }

    const validateEvent = (date, time) => {
      return calender_events.some(event => event.date == date && event.time == time);
    }

    
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
        <TouchableOpacity style={styles.button} onPress = {()=>setOpen(true)}>
          <Text style={styles.addToCalender}>Select Date</Text>
        </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
        <TouchableOpacity style={styles.button2} onPress = {()=>handleOnPress()}>
          <Text style={styles.addToCalender}>Add to Calender</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  image: {
    width: 235,
    height: 270,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 50
  },
  rect: {
    width: 235,
    height: 270,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 20
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 15,
    marginTop: 32,
    marginLeft: 5
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 50,
    width: 178,
    lineHeight: 16,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    fontSize: 16,
    marginTop: 13,
    marginLeft: 26
  },
  button: {
    width: 131,
    height: 38,
    backgroundColor: "lawngreen",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 15,
    marginLeft: 45
    },
    button2: {
    width: 160,
    height: 38,
    backgroundColor: "dodgerblue",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 30,
    marginLeft: 35
  },
  addToCalender: {
    fontFamily: "roboto-regular",
    color: "white",
    marginTop: 10,
    textAlign:'center'
  }
});

export default ChildEventScreen;
