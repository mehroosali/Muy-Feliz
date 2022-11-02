import React from 'react';
import { View, FlatList, StyleSheet, Alert } from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { add_event } from '../redux/actions'

const monthMap = {
    'JAN': 1,
    'FEB': 2,
    'MAR': 3,
    'APR': 4,
    'MAY': 5,
    'JUN': 6,
    'JUL': 7,
    'AUG': 8,
    'SEP': 9,
    'OCT': 10,
    'NOV': 11,
    'DEC': 12
}

function EventScreen(props) {

    const { calender_events } = useSelector(state => state.calenderReducer);
    const dispatch = useDispatch();

    const handleOnPress = (item) => {
        const event = {};
        event['task'] = item.title;
        event['task_label'] = 'P';
        const date_tokens = item.date.split(" ");
        event['time'] = date_tokens[4].concat(" ", date_tokens[5]);
        event['date'] = "2022".concat("-", monthMap[date_tokens[1]], "-", date_tokens[2]);
      if (!validateEvent(event.date, event.time)) {
        dispatch(add_event(event));
        props.navigation.getParent().navigate('Home');
        } else {
        Alert.alert('Schedule Conflict!!', 'Please choose another event or complete tasks at chosen time.');
        }
    } 
    const validateEvent = (date, time) => {
      return calender_events.some(event => event.date == date && event.time == time);
    }
    
      useFocusEffect(
        React.useCallback(() => {
        props.navigation.getParent().setOptions({ headerShown: false})
        return () => {
            props.navigation.getParent().setOptions({ headerShown: true})
        };
        }, [])
    )

    const renderItem = ({ item }) => (
        <Card style={styles.card_container}>
        <Card.Content>
                <Title>{item.title}</Title>
        </Card.Content>
        <Card.Cover source={{uri: item.img }} />
       <Card.Content>
                <Paragraph>{item.date}</Paragraph>
                <Paragraph>{item.location}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress = {() => handleOnPress(item)}>Add to Calender</Button>
        </Card.Actions>
        </Card> 
    );
    
    return (
        <View style={styles.container}>
            <FlatList
                data={props.route.params.events}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>      
    )
}

const styles = StyleSheet.create({
  container: {  
    flex: 1
    },
    card_container :{
        alignContent:'center',
        margin:37
    }
});


export default EventScreen;