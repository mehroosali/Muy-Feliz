import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChildrenScreen from '../pages/children';
import ChildrenEventScreen from '../pages/childevent'

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
        options={{title: 'Add child tasks' }}
        />
    </Navigator>
  );
}

export default ChildrenStack;