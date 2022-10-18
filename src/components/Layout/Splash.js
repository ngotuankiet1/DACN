import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import LottieView from 'lottie-react-native';

var {width} = Dimensions.get('window');
var height = Dimensions.get('window').height;

export default function Splash() {
  // render
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../Assets/splash/splash.png')}
          style={styles.img}
        />
      </View>
      <LottieView
         source={require("../../Assets/splash/loader1.json")}
         autoPlay
         loop
         style={styles.loader}
         />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height * 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: width * 1 - 150,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  loader:{
    position:"absolute",
    bottom: -150,
    left:20,
}
});
