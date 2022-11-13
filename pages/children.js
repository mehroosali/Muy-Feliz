import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import MaterialCard from '../components/MaterialCard';
import AddChild from '../components/AddChild';
import { Store } from '../redux/store';
import { useDispatch } from 'react-redux';
import { add_child } from '../redux/actions';

function ChildrenScreen(props) {
  const [children, setChildren] = useState([]);

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const dispatch = useDispatch();

  useFocusEffect(
        React.useCallback(() => {
        props.navigation.getParent().setOptions({ headerShown: true})
        return () => {
            props.navigation.getParent().setOptions({ headerShown: false})
        };
        }, [])
  )

  useEffect(() => {
    setChildren(Store.getState().childrenReducer.children);
}, []);
  
  function endChildHandler() {
    setModalIsVisible(false);
  }

  function addChildHandler(newChild) {
    dispatch(add_child(newChild));
    const newChildren = [...children, newChild]
    setChildren(newChildren);
    endChildHandler();
  }


  return (
    <View style={styles.container}>
      <Text style={styles.selectAHobby}>My Children</Text>
      <TouchableOpacity
        style={styles.button}
      onPress={() => setModalIsVisible(true)}
      >
       <Text style={styles.buttonText}>Add Child</Text>
      </TouchableOpacity>
      <AddChild
        visible={modalIsVisible}
        onAddChild={(newChild) => addChildHandler(newChild)}
        onCancel={endChildHandler}
      />
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          {children && children.map((child) => (
            <MaterialCard
              key = {child.id}
              childScreen={true}
              style={styles.materialCardWithImageAndTitle}
              navigation={props.navigation}
              children={child}
            ></MaterialCard>))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    marginTop: 10,
    marginLeft: 150,
    width:100
  },
    buttonText: {
      color:'blue'
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
    fontFamily: "fjalla-one-regular",
    textAlign: 'center', 
    color: "#121212",
    fontSize: 30,
    marginTop: 10
  }
});

export default ChildrenScreen;