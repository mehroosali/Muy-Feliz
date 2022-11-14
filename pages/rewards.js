import React, {useEffect} from "react";
import { useSelector } from 'react-redux';
import { StyleSheet, View, Text, ScrollView } from "react-native";
import FlipCard from '@rbl93/react-native-flip-card';

const rewards = [
  {id: 1, text:'Upto 20% off on selected nursery products', promoCode: 'HKF45DFGDF'},
  {id: 2, text:'Buy 2, get a $15 target gift card', promoCode: 'KJ3234ADKF' },
  {id: 3, text:'Save up to $90 on diaper bags at Baby.com', promoCode: '93LQEO7A89P'},
  {id: 4, text:'25% off at Amazon checkout', promoCode: 'BLS208HPQTQ'}
]

function RewardScreen(props) {
const { reward_points, reward_counter } = useSelector(state => state.rewardsReducer.reward_stats);

    useEffect(() => {
      console.log('here');
    }, []);
  
  return (
    <View style={styles.container}>
      <Text style={styles.points}>Points: {reward_points}</Text>
      <ScrollView >
        {rewards && rewards.slice(0, reward_points/50).map((reward) => (
     <FlipCard>
      <View style={styles.rect}>
        <Text style={styles.text}>{reward.text}</Text>
        </View>
        <View style={styles.rect}>
        <Text style={styles.text}>Promo Code: {reward.promoCode}</Text>
      </View>
      </FlipCard >
        )
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  card: {
   marginTop:10 
  },
  rect: {
    width: 250,
    height: 130,
    backgroundColor: "#E6E6E6",
    marginTop: 30
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    textAlign: 'center',
    padding: 30
  },
  points: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 15,
    textAlign: 'center'
  }
});


export default RewardScreen;