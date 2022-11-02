import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ParentScreen from '../pages/parent';
import RewardScreen from '../pages/rewards';
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
        name="Event"
        component={EventScreen}
        />
        <Screen
        name="Rewards"
        component={RewardScreen}
        />
    </Navigator>
  );
}

export default ParentStack;