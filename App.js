import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LaunchScreen from './pages/launch'; './pages/launch'

const {Navigator, Screen} = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }} initialRouteName='Launch'>
        <Screen name="Launch" component={LaunchScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;