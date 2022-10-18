import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Layout/Header';

export default function ProfileScreen({navigation}) {
  // render
  return (
    <View>
      <Header navigation={navigation} />
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({});
