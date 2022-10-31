import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChildrenScreen from '../pages/children';

const { Navigator, Screen } = createNativeStackNavigator();

function ChildrenStack() {
  return (
      <Navigator>
       <Screen
        name="ChildrenHome"
        component={ChildrenScreen}
        options={{ headerShown: false }}
        />
    </Navigator>
  );
}

export default ChildrenStack;