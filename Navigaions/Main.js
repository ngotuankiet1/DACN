import React from 'react';
import AuthScreen from '../src/screens/AuthScreen';
import Tabs from './Tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProductsScreen from '../src/screens/ProductsScreen';
import WishListScreen from '../src/screens/WishListScreen';
import CartScreen from '../src/screens/CartScreen';
import ProfileScreen from '../src/screens/ProfileScreen';
import DrawerItem from '../src/components/Layout/DrawerItem';
import Icon from 'react-native-vector-icons/FontAwesome';

const Main = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#3BB77E',
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
          marginVertical: 2,
        },
      }}
      drawerContent={props => <DrawerItem {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Tabs}
        options={{
          drawerIcon: ({color}) => <Icon name="home" size={25} color={color} />,
        }}
      />
        <Drawer.Screen
          name="Product"
          component={ProductsScreen}
          options={{
            drawerIcon: ({focused}) => <Icon name="shopping-basket" size={25}/>,
          }}
        />
      <Drawer.Screen
        name="WishList"
        component={WishListScreen}
        options={{
          drawerIcon: ({color}) => <Icon name="heart" size={25} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={CartScreen}
        options={{
          drawerIcon: ({color}) => <Icon name="shopping-cart" size={25} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => <Icon name="user" size={25} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default Main;
