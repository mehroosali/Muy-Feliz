import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './routes/drawer';
import { Provider } from 'react-redux';
import { Store } from './redux/store';

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </Provider>
  );
}

export default App;