import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import MaterialCard from '../components/MaterialCard';
import AddHobby from '../components/AddHobby';
import { useDispatch } from 'react-redux';
import { add_hobby, remove_hobby } from '../redux/actions';
import { Store } from '../redux/store';

function ParentScreen(props) {
  const [hobbies, setHobbies] = useState([])

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const dispatch = useDispatch();

   function endHobbyHandler() {
    setModalIsVisible(false);
  }

  function addHobbyHandler(newHobby) {
    dispatch(add_hobby(newHobby));
    const hobby = [...hobbies, newHobby]
    setHobbies(hobby);
    endHobbyHandler();
  }

    function removeHobbyHandler(hobby) {
    dispatch(remove_hobby(hobby));
    const hobby_updated = hobbies.filter(h => h !== hobby)
    setHobbies(hobby_updated);
  }

  useFocusEffect(
        React.useCallback(() => {
        props.navigation.getParent().setOptions({ headerShown: true})
        return () => {
            props.navigation.getParent().setOptions({ headerShown: false})
        };
        }, [])
  )
  
    useEffect(() => {
    setHobbies(Store.getState().hobbyReducer.hobbies);
}, []);
  
  return (
    <View style={styles.container}>
      <Text style={styles.selectAHobby}>My Hobbies</Text>
      <TouchableOpacity
        style={styles.button}
      onPress={() => setModalIsVisible(true)}
      >
       <Text style={styles.buttonText}>Add Hobby</Text>
      </TouchableOpacity>
      <AddHobby
        visible={modalIsVisible}
        onAddHobby={(newHobby) => addHobbyHandler(newHobby)}
        onCancel={endHobbyHandler}
      />
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          {hobbies && hobbies.map((hobby) => (
            <MaterialCard
            key = {hobby.id}
            childScreen={false}
            style={styles.materialCardWithImageAndTitle}
            navigation={props.navigation}
            hobby={hobby}
            onRemoveHobby={(hobby) => removeHobbyHandler(hobby)}
          ></MaterialCard>))}
        </ScrollView>
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
  button: {
    marginTop: 10,
    width:100
  },
    buttonText: {
      color:'blue'
  },
  scrollArea: {
    width: 350,
    height: 500,
    backgroundColor: "#ffffff",
    marginTop: 25
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