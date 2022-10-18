import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Rating } from '@material-ui/lab';

var {width} = Dimensions.get('window');
export default function ProductCard({product}) {
  const [click, setClick] = useState(false);
  return (
    <View style={styles.ProductCard}>
      <Image source={{uri: product.images[0].url}} style={styles.image} />
      <View>
        <Text
          style={{
            color: '#333',
            paddingVertical: 5,
            textAlign: 'center',
          }}>
          {product.name}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}>
        <Text
          style={{
            color: '#333',
            paddingHorizontal: 10,
            fontSize: 16,
          }}>
          $ {product.price}
        </Text>
        <Text
          style={{
            color: '#333',
            fontSize: 14,
            textDecorationLine: 'line-through',
            marginLeft: -5,
            marginTop: -5,
          }}>
          {product.offerPrice.length > 0 ? "$" + product.offerPrice : null }
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginLeft: 30,
        }}>
        {click ? (
          <TouchableOpacity>
            <Icon
              name="heart"
              size={20}
              style={{color: 'crimson', marginRight: 10}}
              onPress={() => setClick(!click)}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <Icon
              name="heart"
              size={20}
              style={{color: '#333', marginRight: 10}}
              onPress={() => setClick(!click)}
            />
          </TouchableOpacity>
        )}
        {product.Stock != 0 ? (
          <TouchableOpacity>
            <Icon
              name="shopping-cart"
              size={20}
              style={{color: '#333', marginRight: 10}}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      {product.Stock === 0 ? (
        <View style={styles.outOfStock}>
          <Text
            style={{
              color: '#fff',
              fontSize: 11,
              textAlign: 'center',
            }}>
            Stock Limitted
          </Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  ProductCard: {
    width: width / 2 - 30,
    height: width / 1.8,
    borderRadius: 10,
    elevation: 8,
    backgroundColor: '#e5e5e5',
    flexWrap: 'wrap',
    // justifyContent: 'center',
    // alignItems: 'center',
    margin: 10,
  },
  image: {
    width: '100%',
    height: width / 2 - 60,
    resizeMode: 'cover',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  outOfStock: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 50,
    position: 'absolute',
    top: -10,
    left: -10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
