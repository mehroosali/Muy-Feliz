import { View, Text, Button } from 'react-native';

function LaunchScreen({navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to Muy Feliz!</Text>
      <Button title="Next Page" onPress={() => navigation.navigate('Home')}/>
    </View>
  );
}

export default LaunchScreen;