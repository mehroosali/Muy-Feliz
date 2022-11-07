import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const imageNames = {
  chess: require('../assets/images/chess.jpg'),
  football: require('../assets/images/football.jpeg'),
  painting: require('../assets/images/painting.jpg'),
  cooking: require('../assets/images/cooking.jpg'),
  gaming: require('../assets/images/gaming.jpg')
};
  

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <ImageBackground
          source={require('../assets/images/menu-bg.jpeg')}
          style={{padding: 20}}>
          <Image
            source={require('../assets/images/mehroosali.jpg')}
            style={{height: 150, width: 150, borderRadius: 150/ 2, marginLeft : 45, marginBottom: 10}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
              textAlign: 'center'
            }}>
            Mehroos Ali
          </Text>
          <View style={{flexDirection: 'row'}}>

        
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;