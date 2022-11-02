import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../pages/home';
import LaunchStack from './launchStack';
import ParentStack from './parentStack';
 import ChildrenStack from './childrenStack';

const { Navigator, Screen } = createDrawerNavigator();

function Drawer() {
  return (
    <Navigator
      initialRouteName='Sign Out'
       screenOptions={{
         unmountOnBlur: true
    }} >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Screen
        name="Children"
        component={ChildrenStack}
        options={{title: 'Children' }}
      />
      <Screen
        name="Parent"
        component={ParentStack}
        options={{title: 'Parent' }}
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