import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useSelector } from "react-redux";

const CustomDrawer = (props) => {
  const { current_user } = useSelector((state) => state.userReducer);

  const checkImageURL = () => {
    if (current_user.imageUri) {
      return current_user.imageUri;
    } else {
      return "https://i.postimg.cc/7ZJkyZpH/user-profile.jpg";
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "deeppink" }}
      >
        <ImageBackground
          source={{ uri: 'https://t4.ftcdn.net/jpg/03/03/90/07/360_F_303900759_u3iTdZu7Hw3sN52zNxkCn09W2oqAhczR.jpg' }}
          style={{ padding: 20 }}
        >
          <Image
            source={{ uri: checkImageURL() }}
            style={{
              height: 150,
              width: 150,
              borderRadius: 150 / 2,
              marginLeft: 45,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontFamily: "Roboto-Medium",
              marginBottom: 5,
              textAlign: "center",
            }}
          >
            {current_user.name}
          </Text>
          <View style={{ flexDirection: "row" }}></View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;