import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from '../components/Layout/Header';
import Profile from '../components/Profile/Profile';
export default function ProfileScreen({navigation}) {
  // render
  return (
    <View>
      <Header navigation={navigation} />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Profile navigation={navigation} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
