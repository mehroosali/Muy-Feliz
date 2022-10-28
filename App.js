import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LaunchScreen from './pages/launch'; 
import HomeScreen from './pages/home'; 

const {Navigator, Screen} = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }} initialRouteName='Launch'>
        <Screen name="Launch" component={LaunchScreen} />
        <Screen name="Home" component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;