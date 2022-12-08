import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../pages/home";
import LaunchStack from "./launchStack";
import ParentStack from "./parentStack";
import ChildrenStack from "./childrenStack";
import CustomDrawer from "../components/CustomDrawer";
import RewardScreen from "../pages/rewards";
import { View, Button } from "react-native";

const { Navigator, Screen } = createDrawerNavigator();

function Drawer(props) {
  return (
    <Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="Sign Out"
      screenOptions={{
        unmountOnBlur: true,
      }}
    >
      <Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
      <Screen
        name="Children"
        component={ChildrenStack}
        options={(props) => ({
          title: "Children",
          headerRight: () => (
            <View style={{ marginLeft: 10 }}>
              <Button title="Home" color="hotpink" />
            </View>
          ),
        })}
      />
      <Screen
        name="Parent"
        component={ParentStack}
        options={(props) => ({
          title: "Hobbies",
          headerRight: () => (
            <View style={{ marginLeft: 10 }}>
              <Button title="Home" color="hotpink" />
            </View>
          ),
        })}
      />
      <Screen
        name="Rewards"
        component={RewardScreen}
        options={(props) => ({
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <Button title="Home" color="hotpink" />
            </View>
          ),
        })}
      />
      <Screen
        name="Sign Out"
        component={LaunchStack}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}

export default Drawer;