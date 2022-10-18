import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import ProductCard from '../Home/ProductCard';

var {width} = Dimensions.get('window');

export default function HomeProduct({products}) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          color: '#333',
          textAlign: 'center',
        }}>
        Best Selling
      </Text>
      <View style={styles.productCard}>
        {products &&
          products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 550,
    padding: 10,
    marginVertical: 10,
    marginBottom: width / 6 -5
  },
  productCard: {
    width: width * 1 - 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
