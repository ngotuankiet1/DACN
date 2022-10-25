import {StyleSheet, ScrollView, View, Text, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProduct} from '../../Redux/Actions/ProductAction';
import Banner from '../components/Home/Banner';
import HomeProduct from '../components/Home/HomeProduct';
import Header from '../components/Layout/Header';
import Loader from '../components/Layout/Loader';

var {width} = Dimensions.get('window');

export default function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  const {products, error, loading} = useSelector(state => state.products);
  const {wishlistData} = useSelector(state => state.wishList);

  useEffect(() => {
    if (error) {
      alert(error);
    }
    dispatch(getProduct());
  }, [dispatch, error]);
  // console.log(products);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <Header navigation={navigation} />
            <Banner />
            <HomeProduct
              products={products}
              navigation={navigation}
              wishlistData={wishlistData}
            />
          </ScrollView>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
