import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './routes/drawer';

function App() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}

export default App;