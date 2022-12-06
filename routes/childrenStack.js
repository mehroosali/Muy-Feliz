import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChildrenScreen from "../pages/children";
import ChildrenEventScreen from "../pages/childevent";
import { View, Button } from "react-native";

const { Navigator, Screen } = createNativeStackNavigator();

function ChildrenStack() {
  return (
    <Navigator>
      <Screen
        name="ChildrenHome"
        component={ChildrenScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="ChildrenEvent"
        component={ChildrenEventScreen}
        options={(props) => ({
          title: "Add child tasks",
          headerRight: () => (
            <View style={{ marginLeft: 0 }}>
              <Button title="Home" color="#00cc00" />
            </View>
          ),
        })}
      />
    </Navigator>
  );
}

export default ChildrenStack;