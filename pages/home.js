import React, {useState } from 'react';
import {View, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import {Agenda} from 'react-native-calendars';
import { Card, Avatar } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { delete_event, complete_event, increment_reward_points, decrement_reward_count } from '../redux/actions';
import { Store } from '../redux/store';

function HomeScreen(props) {
  const [items, setItems] = useState({});
  const { calender_events } = useSelector(state => state.calenderReducer);
  const { reward_points, reward_counter } = useSelector(state => state.rewardsReducer.reward_stats);
  const dispatch = useDispatch();
  
  const handleOnPress = (item) => {
    Alert.alert('Mark as Complete', 'Complete task to claim rewards.', [
      {
        text: "Complete",
      onPress: () => {
        dispatch(complete_event(item.id));
        handleRewards()
        loadAndSet(Store.getState().calenderReducer.calender_events);
        },
      },
        {
        text: "Delete",
      onPress: () => {
        dispatch(delete_event(item));
        loadAndSet(Store.getState().calenderReducer.calender_events);
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
  
  const handleRewards = () => {
    dispatch(increment_reward_points(reward_points + 10));
    Alert.alert('Reward points claimed', 'Complete ' + reward_counter + ' more tasks to claim rewards.'); 
    dispatch(decrement_reward_count(reward_counter - 1));
    const updated_rewards_count = Store.getState().rewardsReducer.reward_stats.reward_counter;
    if (updated_rewards_count == 0) {
     dispatch(decrement_reward_count(5)); 
    }
  }
  const loadItems = () => {
    loadAndSet(calender_events);
  };

  const loadAndSet = (calender_events) => {
    const newItems = {}
    calender_events.forEach((event) => {
    if (!newItems[event.date]) {
        newItems[event.date] = [];
    }
      newItems[event.date].push(event);
    });
    setItems(newItems);
  }

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
              <Text style= {item.completed ? styles.text_completed: styles.text_not_completed}>{item.time}</Text>
              <Text style= {item.completed ? styles.text_completed: styles.text_not_completed}>{item.task}</Text>
              <Avatar.Text
                style={item.task_label == "C" ? styles.children : styles.parent}
                label={item.task_label == "C" ? "C" : "P"} />
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
        selected={new Date()}
        renderItem={renderItem}
        renderEmptyData={() => {
         return <View />;
        }}
        showClosingKnob={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text_completed: {
    flexShrink: 1,
    textDecorationLine: 'line-through',
    color: 'red'
  },
  text_not_completed: {
    flexShrink: 1
  },
  parent: {
   backgroundColor: "blue" 
  },
  children: {
   backgroundColor: "red" 
  }
});

export default HomeScreen;