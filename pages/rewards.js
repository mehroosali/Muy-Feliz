import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View, Text, ScrollView, Button } from "react-native";
import FlipCard from "@rbl93/react-native-flip-card";
import { Banner, FAB } from "react-native-paper";
import RewardsHelp from "../components/RewardsHelp";

const rewards = [
  {
    id: 1,
    text: "Upto 20% off on selected nursery products",
    promoCode: "HKF45DFGDF",
    expiry: "12/31/2022",
  },
  {
    id: 2,
    text: "Buy 2, get a $15 target gift card",
    promoCode: "KJ3234ADKF",
    expiry: "12/31/2022",
  },
  {
    id: 3,
    text: "Save up to $90 on diaper bags at Baby.com",
    promoCode: "93LQEO7A89P",
    expiry: "12/31/2022",
  },
  {
    id: 4,
    text: "25% off at Amazon checkout",
    promoCode: "BLS208HPQTQ",
    expiry: "12/31/2022",
  },
];

function RewardScreen(props) {
  const { reward_points, reward_counter } = useSelector(
    (state) => state.rewardsReducer.reward_stats
  );
  const [visible, setVisible] = useState(false);

  useEffect(
    React.useCallback(() => {
      props.navigation.setOptions({
        headerRight: () => (
          <View style={{ marginRight: 10 }}>
            <Button
              title="Home"
              onPress={() => props.navigation.navigate("Home")}
              color="hotpink"
            />
          </View>
        ),
      });
    }, [props.navigation])
  );
  const handleBanner = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  return (
    <>
      <Banner
        visible={visible}
        actions={[
          {
            label: "Close",
            onPress: () => setVisible(false),
          },
        ]}
      >
        <RewardsHelp />
      </Banner>
      <View style={styles.container}>
        <Text style={styles.points}>Points: {reward_points}</Text>
        <ScrollView>
          {rewards &&
            rewards.slice(0, reward_points / 50).map((reward) => (
              <FlipCard>
                <View style={styles.rect}>
                  <Text style={styles.text}>{reward.text}</Text>
                </View>
                <View style={styles.rect}>
                  <Text style={styles.text}>
                    Promo Code: {reward.promoCode}
                  </Text>
                  <Text style={styles.text2}>Expiry: {reward.expiry}</Text>
                </View>
              </FlipCard>
            ))}
        </ScrollView>
      </View>
      <View style={styles.FABcontainer}>
        <FAB label="Help" color="white" style={styles.fab} onPress={() => handleBanner()} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  card: {
    marginTop: 10,
  },
  rect: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 130,
    backgroundColor: "pink",
    marginTop: 30,
    borderColor: 'hotpink',
    borderWidth: 3
  },
  text: {
    fontFamily: "roboto-regular",
    color: "blue",
    fontSize: 20,
  },
  text2: {
    fontFamily: "roboto-regular",
    color: "blue",
    fontSize: 20,
  },
  points: {
    fontFamily: "roboto-regular",
    color: "blue",
    fontSize: 20,
    marginTop: 15,
    textAlign: "center",
  },
  fab: {
    position: "absolute",
    backgroundColor: "hotpink",
    
  },
  FABcontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50
  },
});

export default RewardScreen;