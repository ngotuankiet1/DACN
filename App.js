import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import Store from './Redux/Store';
import {NavigationContainer} from '@react-navigation/native';
import Main from './Navigaions/Main';
import Auth from './Navigaions/Auth';
import {loadUser} from './Redux/Actions/UserAction';
import Splash from './src/components/Layout/Splash';

const App = () => {
  return (
    <Provider store={Store}>
      <AppStack />
    </Provider>
  );
};

const AppStack = () => {
  const {isAuthenticated, user, loading} = useSelector(state => state.user);

  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <NavigationContainer>
      <>{loading ? <Splash /> : <>{isAuthenticated ? <Main /> : <Auth />}</>}</>
    </NavigationContainer>
  );
};

export default App;
