import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Layout/Header';
import Cart from "../components/Cart/Cart";
export default function CartScreen({navigation}) {
  // render
  return (
    <View>
      <Header navigation={navigation} />
      <Cart navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
