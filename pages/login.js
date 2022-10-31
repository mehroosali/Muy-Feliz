import * as React from 'react';
import { View, Text, Button } from 'react-native';

function LoginScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Login Screen</Text>
          <Button title='Login'
              onPress={() => props.navigation.navigate('Home')} />
    </View>
  );
}

export default LoginScreen;