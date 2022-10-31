import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const handleOnPress = (props) => {
  props.navigation.navigate('Rewards');
}

function ParentScreen(props) {

  useFocusEffect(
        React.useCallback(() => {
        // Do something when the screen is focused
        props.navigation.getParent().setOptions({ headerShown: true})
        return () => {
            // Do something when the screen is unfocused
            // Useful for cleanup functions
            props.navigation.getParent().setOptions({ headerShown: false})
        };
        }, [])
    )
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Parent Screen</Text>
      <Button title='Rewards'
        onPress={() => handleOnPress(props)} />
    </View>
  );
}

export default ParentScreen;