import * as React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import MaterialCard from  '../components/MaterialCard'

function ParentScreen(props) {
  const { hobbies } = useSelector(state => state.hobbyReducer);

  useFocusEffect(
        React.useCallback(() => {
        props.navigation.getParent().setOptions({ headerShown: true})
        return () => {
            props.navigation.getParent().setOptions({ headerShown: false})
        };
        }, [])
    )
  
  return (
    <View style={styles.container}>
      <Text style={styles.selectAHobby}>Hobbies</Text>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <MaterialCard
            style={styles.materialCardWithImageAndTitle}
            navigation={props.navigation}
            hobby = {hobbies[0]}
          ></MaterialCard>
          <MaterialCard
            style={styles.materialCardWithImageAndTitle}
            navigation={props.navigation}
            hobby = {hobbies[1]}
          ></MaterialCard>
          <MaterialCard
            style={styles.materialCardWithImageAndTitle}
            navigation={props.navigation}
            hobby = {hobbies[2]}
          ></MaterialCard>
          <MaterialCard
            style={styles.materialCardWithImageAndTitle}
            navigation={props.navigation}
            hobby = {hobbies[3]}
          ></MaterialCard>
          <MaterialCard
            style={styles.materialCardWithImageAndTitle}
            navigation={props.navigation}
            hobby = {hobbies[4]}
          ></MaterialCard>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollArea: {
    width: 350,
    height: 600,
    backgroundColor: "#ffffff",
    marginTop: 25,
    marginLeft: 18
  },
  scrollArea_contentContainerStyle: {
    height: 1000,
    width: 341
  },
  materialCardWithImageAndTitle: {
    width: 295,
    height: 163,
    marginTop: 21,
    marginLeft: 23
  },
  selectAHobby: {
    fontFamily: "andada-pro-700",
    textAlign: 'center', 
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    marginTop: 10
  }
});

export default ParentScreen;