import * as React from 'react';
import { View, Text } from 'react-native';

function ChildrenScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Children Screen</Text>
    </View>
  );
}

export default ChildrenScreen;