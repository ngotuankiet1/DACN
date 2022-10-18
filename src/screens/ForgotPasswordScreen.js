import {View, Text} from 'react-native';
import React from 'react';
import ForgotPassword from '../components/Authentication/ForgotPassword.js';

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <View>
      <ForgotPassword navigation={navigation} />
    </View>
  );
};

export default ForgotPasswordScreen;
