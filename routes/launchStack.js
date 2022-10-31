import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LaunchScreen from '../pages/launch'; 
import LoginScreen from '../pages/login'; 
import SignupScreen from '../pages/signup';

const { Navigator, Screen } = createNativeStackNavigator();

function LaunchStack() {
  return (
      <Navigator>
       <Screen
        name="Launch"
        component={LaunchScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="Login"
        component={LoginScreen}
      />
      <Screen
        name="Signup"
        component={SignupScreen}
      />
    </Navigator>
  );
}

export default LaunchStack;