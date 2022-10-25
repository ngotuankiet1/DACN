import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Layout/Header'
import FilterProducts from '../components/Products/FilterProducts'


export default function ProductsScreen({navigation}) {
  return (
    <View>
      <Header navigation={navigation} />
      <FilterProducts navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({})