import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import MaterialCard from "../components/MaterialCard";
import AddHobby from "../components/AddHobby";
import { useDispatch } from "react-redux";
import {
  add_hobby,
  remove_hobby,
  increment_events_attending,
} from "../redux/actions";
import { Store } from "../redux/store";
import { Banner, FAB } from "react-native-paper";
import HobbiesHelp from "../components/HobbiesHelp";

function ParentScreen(props) {
  const [hobbies, setHobbies] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  function endHobbyHandler() {
    setModalIsVisible(false);
  }

  function addHobbyHandler(newHobby) {
    if (checkHobbyExist(newHobby)) {
      Alert.alert("Duplicate hobby added!", "Add a different hobby.");
    } else {
      dispatch(add_hobby(newHobby));
      const hobby = [...hobbies, newHobby];
      setHobbies(hobby);
      endHobbyHandler();
    }
  }

  function removeHobbyHandler(hobby) {
    dispatch(remove_hobby(hobby));
    const hobby_updated = hobbies.filter((h) => h !== hobby);
    setHobbies(hobby_updated);
  }

  function updateHobbyHandler(hobby_id) {
    dispatch(increment_events_attending(hobby_id));
    const hobby_updated = hobbies.map((hobby) => {
      if (hobby.id == hobby_id) {
        return { ...hobby, events_attending: hobby.events_attending + 1 };
      }
      return hobby;
    });
    setHobbies(hobby_updated);
  }

  const checkHobbyExist = (hobby) => {
    return hobbies.some((h) => h.name == hobby.name);
  };

  const handleBanner = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      props.navigation.getParent().setOptions({ headerShown: true });
      return () => {
        props.navigation.getParent().setOptions({ headerShown: false });
      };
    }, [])
  );

  useEffect(() => {
    setHobbies(Store.getState().hobbyReducer.hobbies);
  }, []);

  useEffect(
    React.useCallback(() => {
      props.navigation.getParent().setOptions({
        headerRight: () => (
          <View style={{ marginRight: 10 }}>
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

  return (
    <>
      <Banner
        visible={visible}
        actions={[
          {
            label: "Close",
            onPress: () => setVisible(false),
          },
        ]}
      >
        <HobbiesHelp />
      </Banner>
      <View style={styles.container}>
        <Text style={styles.selectAHobby}>My Hobbies</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalIsVisible(true)}
        >
          <Text style={styles.buttonText}>ADD HOBBY</Text>
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
            {hobbies &&
              hobbies.map((hobby) => (
                <MaterialCard
                  key={hobby.id}
                  childScreen={false}
                  style={styles.materialCardWithImageAndTitle}
                  navigation={props.navigation}
                  hobby={hobby}
                  onRemoveHobby={(hobby) => removeHobbyHandler(hobby)}
                  incrementHobbyCounter={(hobby_id) =>
                    updateHobbyHandler(hobby_id)
                  }
                ></MaterialCard>
              ))}
          </ScrollView>
        </View>
      </View>
      <View style={styles.FABcontainer}>
        <FAB label="Help" style={styles.fab} onPress={() => handleBanner()} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    marginTop: 10,
    width: 100,
  },
  buttonText: {
    color: "blue",
    fontSize: 15,
  },
  scrollArea: {
    width: 350,
    height: 500,
    backgroundColor: "#ffffff",
    marginTop: 25,
  },
  scrollArea_contentContainerStyle: {
    height: 1000,
    width: 341,
  },
  materialCardWithImageAndTitle: {
    width: 295,
    height: 163,
    marginTop: 21,
    marginLeft: 23,
  },
  selectAHobby: {
    fontFamily: "andada-pro-700",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    marginTop: 10,
  },
  fab: {
    position: "absolute",
    backgroundColor: "lime",
  },
  FABcontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
});

export default ParentScreen;