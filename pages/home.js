import React, {useState, useEffect, useCallback} from 'react';
import {View, TouchableOpacity, Text, Alert } from 'react-native';
import {Agenda} from 'react-native-calendars';
import { Card, Avatar, Button } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { delete_event } from '../redux/actions';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

function HomeScreen(props) {
  const [items, setItems] = useState({});
   const [value, setValue] = useState(0);
  const { calender_events } = useSelector(state => state.calenderReducer);
  const dispatch = useDispatch();

  useEffect(() => {
  if (items) setValue(value+1)
  }, [items])
  
  const handleOnPress = (item) => {
  Alert.alert('Mark as Complete', 'This will delete the item of your schedule', [
        {
        text: "OK",
      onPress: () => {
        dispatch(delete_event(item));
        //BUG FIX: get changed state from store

        loadItems();
        },
      },
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      }
   ]
    );
  }
  
  const loadItems = (day) => {
    const newItems = {}
    calender_events.forEach((event) => {
    if (!newItems[event.date]) {
        newItems[event.date] = [];
    }
      newItems[event.date].push(event);
    });
    setItems(newItems);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card onPress={() => handleOnPress(item)}>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.time}</Text>
              <Text style={{ flexShrink: 1}}>{item.task}</Text>
              <Avatar.Text label= {item.task_label == "C" ? "C" : "P"} />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={timeToString(Date.now())}
        renderItem={renderItem}
        renderEmptyData={() => {
         return <View />;
        }}
        showClosingKnob={true}
      />
    </View>
  );
};

export default HomeScreen;