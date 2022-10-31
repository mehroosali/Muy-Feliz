import * as React from 'react';
import { View, Text } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

function RewardScreen(props) {

  // React.useEffect(() => {
  //   props.navigation.getParent().setOptions({
  //      headerShown: false
  //    });
  //   });

  useFocusEffect(
        React.useCallback(() => {
        // Do something when the screen is focused
        props.navigation.getParent().setOptions({ headerShown: false})
        return () => {
            // Do something when the screen is unfocused
            // Useful for cleanup functions
            props.navigation.getParent().setOptions({ headerShown: true})
        };
        }, [])
    )
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Reward Screen</Text>
    </View>
  );
}

export default RewardScreen;