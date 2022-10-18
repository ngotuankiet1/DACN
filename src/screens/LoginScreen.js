import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Login from '../components/Authentication/logins';

const LoginScreen = ({navigation}) => {
  // render
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <Login navigation={navigation}/>
    </ScrollView>
  );
};

export default LoginScreen;
