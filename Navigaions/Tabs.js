import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/screens/HomeScreen';
import ProductsScreen from '../src/screens/ProductsScreen';
import WishListScreen from '../src/screens/WishListScreen';
import CartScreen from '../src/screens/CartScreen';
import ProfileScreen from '../src/screens/ProfileScreen';
import React, { useEffect } from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../src/components/Layout/Loader';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from '../src/components/Products/ProductDetails';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import { getCart, getWishList } from '../Redux/Actions/ProductAction';
import OrderScreen from '../src/components/Order/OrderScreen'
import UpdateAccount from '../src/components/Order/UpdateAccount.js'
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  bottomTabs: {
    marginVertical: 10,
  },
});

export default function Tabs() {
  const {user, loading} = useSelector(state => state.user);
  const {wishlistData, error} = useSelector(state => state.wishList);
  const {cartData} = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alert(error);
    }
    dispatch(getWishList());
    // dispatch(getCart());
  }, [dispatch, error, wishlistData, cartData]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarHideOnKeyboard: true,
            }}
            initialRouteName="Home2">
            <Tab.Screen
              name="Home2"
              component={SimpleScreen}
              options={({route}) => ({
                tabBarStyle: {display: Visibility(route)},
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={require('../src/Assets/BottomTab/home.png')}
                      style={{
                        width: 25,
                        height: 25,
                        resizeMode: 'contain',
                        marginTop: 5,
                        tintColor: focused ? 'crimson' : 'black',
                      }}
                    />
                    <Text style={{color: focused ? 'crimson' : 'black'}}>
                      Home
                    </Text>
                  </View>
                ),
              })}
            />
            <Tab.Screen
              name="Products"
              component={ProductsScreen}
              options={{
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={require('../src/Assets/BottomTab/shop.png')}
                      style={{
                        width: 25,
                        height: 25,
                        resizeMode: 'contain',
                        marginTop: 5,
                        tintColor: focused ? 'crimson' : 'black',
                      }}
                    />
                    <Text style={{color: focused ? 'crimson' : 'black'}}>
                      Products
                    </Text>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="wishlist"
              component={WishListScreen}
              options={{
                tabBarBadge: wishlistData?.length,
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={require('../src/Assets/BottomTab/heart.png')}
                      style={{
                        width: 25,
                        height: 25,
                        resizeMode: 'contain',
                        marginTop: 5,
                        tintColor: focused ? 'crimson' : 'black',
                      }}
                    />
                    <Text style={{color: focused ? 'crimson' : 'black'}}>
                      WishList
                    </Text>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="cart"
              component={CartScreen}
              options={{
                tabBarBadge: cartData?.length,
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={require('../src/Assets/BottomTab/cart.png')}
                      style={{
                        width: 25,
                        height: 25,
                        resizeMode: 'contain',
                        marginTop: 5,
                        tintColor: focused ? 'crimson' : 'black',
                      }}
                    />
                    <Text style={{color: focused ? 'crimson' : 'black'}}>
                      Cart
                    </Text>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="profile"
              component={ProfileScreen}
              options={{
                tabBarBadge: 1,
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={{
                        uri: user.avatar.url,
                      }}
                      style={{
                        width: 30,
                        height: 30,
                        marginTop: 5,
                        borderRadius: 80,
                      }}
                    />
                    <Text style={{color: focused ? 'crimson' : 'black'}}>
                      DK
                    </Text>
                  </View>
                ),
              }}
            />
          </Tab.Navigator>
        </>
      )}
    </>
  );
}

const SimpleScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
      <Stack.Screen name="UpdateProfile" component={UpdateAccount} />
    </Stack.Navigator>
  );
};

const Visibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(route);
  if (routeName === 'ProductDetails') {
    return 'none';
  }

  if (routeName === 'OrderScreen') {
    return 'none';
  }

  if (routeName === 'UpdateProfile') {
    return 'none';
  }

  if (routeName === 'Home') {
    return 'flex';
  }
};
