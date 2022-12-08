import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import MaterialCard from "../components/MaterialCard";
import AddChild from "../components/AddChild";
import { Store } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { add_child, remove_child } from "../redux/actions";
import { Banner, FAB } from "react-native-paper";
import ChildrenHelp from "../components/ChildrenHelp";

function ChildrenScreen(props) {
  const [children, setChildren] = useState([]);

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const { current_user } = useSelector((state) => state.userReducer);

  useFocusEffect(
    React.useCallback(() => {
      props.navigation.getParent().setOptions({ headerShown: true });
      return () => {
        props.navigation.getParent().setOptions({ headerShown: false });
      };
    }, [])
  );

  useEffect(() => {
    setChildren(
      Store.getState().childrenReducer.children.filter(
        (c) => c.user == current_user.email
      )
    );
  }, []);

  useEffect(
    React.useCallback(() => {
      props.navigation.getParent().setOptions({
        headerRight: () => (
          <View style={{ marginRight: 10 }}>
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

  function endChildHandler() {
    setModalIsVisible(false);
  }

  function addChildHandler(newChild) {
    dispatch(add_child(newChild));
    const newChildren = [...children, newChild];
    setChildren(newChildren);
    endChildHandler();
  }
  function removeChildHandler(child) {
    dispatch(remove_child(child));
    const children_updated = children.filter((c) => c !== child);
    setChildren(children_updated);
  }

  const handleBanner = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

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
        <ChildrenHelp />
      </Banner>

      <View style={styles.container}>
        <Text style={styles.selectAHobby}>My Children</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalIsVisible(true)}
        >
          <Text style={styles.buttonText}>ADD CHILD</Text>
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
            {children &&
              children.map((child) => (
                <MaterialCard
                  key={child.id}
                  childScreen={true}
                  style={styles.materialCardWithImageAndTitle}
                  navigation={props.navigation}
                  children={child}
                  onRemoveChild={(child) => removeChildHandler(child)}
                ></MaterialCard>
              ))}
          </ScrollView>
        </View>
      </View>
      <View style={styles.FABcontainer}>
        <FAB label="Help" color="white" style={styles.fab} onPress={() => handleBanner()} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  button: {
    marginTop: 10,
    width: 100,
  },
  buttonText: {
    color: "blue",
  },
  scrollArea: {
    width: 350,
    height: 500,
    backgroundColor: "transparent",
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
    backgroundColor: "hotpink",
  },
  FABcontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
});

export default ChildrenScreen;