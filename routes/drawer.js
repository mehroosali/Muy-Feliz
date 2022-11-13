import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../pages/home';
import LaunchStack from './launchStack';
import ParentStack from './parentStack';
import ChildrenStack from './childrenStack';
import CustomDrawer from '../components/CustomDrawer';
import RewardScreen from '../pages/rewards';

const { Navigator, Screen } = createDrawerNavigator();

function Drawer() {
  return (
    <Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName='Sign Out'
       screenOptions={{
         unmountOnBlur: true
    }} >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home' }}
      />
      <Screen
        name="Children"
        component={ChildrenStack}
        options={{title: 'Children' }}
      />
      <Screen
        name="Parent"
        component={ParentStack}
        options={{title: 'Hobbies' }}
      />
      <Screen
        name="Rewards"
        component={RewardScreen}
        options={{ title: 'Rewards' }}
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