import { View, Text, Button } from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Previous Page" onPress={() => navigation.navigate('Launch')}/>
    </View>
  );
}

export default HomeScreen;