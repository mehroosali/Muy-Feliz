import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ParentScreen from "../pages/parent";
import EventScreen from "../pages/events";
import { View, Button } from "react-native";

const { Navigator, Screen } = createNativeStackNavigator();

function ParentStack() {
  return (
    <Navigator>
      <Screen
        name="ParentHome"
        component={ParentScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="Events"
        component={EventScreen}
        options={(props) => ({
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

export default ParentStack;