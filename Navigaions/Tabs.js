import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/screens/HomeScreen';
import ProductsScreen from '../src/screens/ProductsScreen';
import WishListScreen from '../src/screens/WishListScreen';
import CartScreen from '../src/screens/CartScreen';
import ProfileScreen from '../src/screens/ProfileScreen';
import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  bottomTabs: {
    marginVertical: 10,
  },
});

export default function Tabs() {
  const {user, loading} = useSelector(state => state.user);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
      style={styles.bottomTabs}>
      <Tab.Screen
        name="Home2"
        component={HomeScreen}
        options={{
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
              <Text style={{color: focused ? 'crimson' : 'black'}}>Home</Text>
            </View>
          ),
        }}
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
          tabBarBadge: 1,
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
          tabBarBadge: 2,
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
              <Text style={{color: focused ? 'crimson' : 'black'}}>Cart</Text>
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
              <Text style={{color: focused ? 'crimson' : 'black'}}>DK</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
