import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

var {width} = Dimensions.get('window');

const Header = ({navigation}) => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerFlex}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="bars" size={40}></Icon>
        </TouchableOpacity>
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#333"
          style={styles.searchBox}></TextInput>
        <TouchableOpacity>
          <Icon name="search" size={30} style={styles.searchIcon}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerMain: {
    width: width,
    height: width / 4 - 35,
    backgroundColor: '#fff',
    elevation: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  headerFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchBox: {
    width: width - 80,
    height: width / 7 - 15,
    backgroundColor: '#e5e5e5',
    marginHorizontal: 10,
    borderRadius: 20,
    fontSize: 15,
    paddingHorizontal: 10,
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    bottom: -15,
    right: 20,
  },
});
