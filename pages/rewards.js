import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

function RewardScreen(props) {
const { rewards_count, rewards } = useSelector(state => state.rewardsReducer);
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Reward Count: {rewards_count} {rewards[0].title}</Text>
      <Text>Reward 1: {rewards[0].title}</Text>
    </View>
  );
}

export default RewardScreen;