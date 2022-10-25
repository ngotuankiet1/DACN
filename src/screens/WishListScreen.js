import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Layout/Header';
import WishList from "../components/WishList/WishList";

export default function WishListScreen({navigation}) {
  // render
  return (
    <View>
      <Header navigation={navigation} />
      <WishList navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
