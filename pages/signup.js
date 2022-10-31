import * as React from 'react';
import { View, Text, Button } from 'react-native';

function SignupScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Sign Up Screen</Text>
          <Button title='Register'
              onPress={() => props.navigation.navigate('Login')} />
    </View>
  );
}

export default SignupScreen;