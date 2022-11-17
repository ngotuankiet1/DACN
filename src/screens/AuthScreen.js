import React from 'react';
import { View, Text } from 'react-native';

const AuthScreen = ({navigation}) => {
// render
  return (
    <View>
      <Text onPress={() => navigation.navigate("Home")}>AuthScreen</Text>
    </View>
  )
}

export default AuthScreen
