import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ParentScreen from '../pages/parent';
import EventScreen from '../pages/events';

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
        />
    </Navigator>
  );
}

export default ParentStack;