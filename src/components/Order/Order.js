import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import OrderSteps from './OrderSteps';
import {CardField, useStripe} from '@stripe/stripe-react-native';
import {URI} from '../../../Redux/URI';
import axios from 'axios';

const {width} = Dimensions.get('window');
const height = Dimensions.get('window').height;

export default function Order() {
  const {cartData} = useSelector(state => state.cart);
  const {user} = useSelector(state => state.user);
  const [active, setActive] = useState(1);
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [countryName, setCountryName] = useState('');
  const [cityName, setCityName] = useState('');
  const [subtotal, setSubtotal] = useState(0);
  const [success, setSuccess] = useState(false);
  const totalPrice = cartData.reduce((acc, curr) => acc + curr.productPrice, 0);
  const shippingDetailsHandler = () => {
    if (
      address.length > 0 &&
      phoneNumber.length > 0 &&
      countryName.length > 0 &&
      cityName.length > 0 &&
      state.length > 0
    ) {
      setActive(2);
    } else {
      ToastAndroid.showWithGravity(
        'Please fill all the fields',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    }
  };

  const confirmOrderHandler = () => {
    if (cartData.length > 0) {
      setActive(3);
    }
  };

  const submitHandler = async () => {};
  return (
    <View>
      <OrderSteps activeTab={active} />
      {active === 1 ? (
        <ShippingInfo
          activeTab={active}
          address={address}
          setAddress={setAddress}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          countryName={countryName}
          setCountryName={setCountryName}
          cityName={cityName}
          setCityName={setCityName}
          setState={setState}
          state={state}
          shippingDetailsHandler={shippingDetailsHandler}
        />
      ) : active === 2 ? (
        <Confirmation
          cartData={cartData}
          user={user}
          phoneNumber={phoneNumber}
          address={address}
          countryName={countryName}
          cityName={cityName}
          confirmOrderHandler={confirmOrderHandler}
          setSubtotal={setSubtotal}
        />
      ) : active === 3 ? (
        <PaymentInfo submitHandler={submitHandler} totalPrice={totalPrice} />
      ) : null}
    </View>
  );
}

const ShippingInfo = ({
  address,
  setAddress,
  phoneNumber,
  setPhoneNumber,
  countryName,
  setCountryName,
  cityName,
  setCityName,
  shippingDetailsHandler,
  setState,
  state,
}) => {
  return (
    <ScrollView style={{marginTop: 50}}>
      <View style={styles.inputMain}>
        <TextInput
          placeholder="Enter your Address..."
          style={styles.input}
          placeholderTextColor={'#333'}
          textContentType="addressLine1"
          value={address}
          onChangeText={text => setAddress(text)}
        />
      </View>
      <View style={styles.inputMain}>
        <TextInput
          placeholder="Enter your Phone Number..."
          style={styles.input}
          placeholderTextColor={'#333'}
          textContentType="telephoneNumber"
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
        />
      </View>
      <View style={styles.inputMain}>
        <TextInput
          placeholder="Enter your Country Name..."
          style={styles.input}
          placeholderTextColor={'#333'}
          textContentType="countryName"
          value={countryName}
          onChangeText={text => setCountryName(text)}
        />
      </View>
      <View style={styles.inputMain}>
        <TextInput
          placeholder="Enter your City Name..."
          style={styles.input}
          placeholderTextColor={'#333'}
          textContentType="city"
          value={cityName}
          onChangeText={text => setCityName(text)}
        />
      </View>
      <View style={styles.inputMain}>
        <TextInput
          placeholder="Enter your State Name..."
          style={styles.input}
          placeholderTextColor={'#333'}
          textContentType="state"
          value={state}
          onChangeText={text => setState(text)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={shippingDetailsHandler}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const Confirmation = ({
  cartData,
  user,
  phoneNumber,
  address,
  countryName,
  cityName,
  confirmOrderHandler,
  setSubtotal,
}) => {
  return (
    <ScrollView style={styles.confirmation}>
      <View style={{marginBottom: 20}}>
        <Text
          style={{
            color: '#333',
            fontSize: 20,
            textAlign: 'center',
            paddingVertical: 10,
          }}>
          Your Shipping Address
        </Text>
        <Text style={{color: '#333', fontSize: 16, padding: 10}}>
          Name: {user.name}
        </Text>
        <Text style={{color: '#333', fontSize: 16, padding: 10}}>
          Phone: {phoneNumber}
        </Text>
        <Text style={{color: '#333', fontSize: 16, padding: 10}}>
          Address: {address}, {cityName}, {countryName}
        </Text>
        <Text style={{color: '#333', fontSize: 20, textAlign: 'center'}}>
          Your Cart Items
        </Text>
        {cartData &&
          cartData.map((item, index) => {
            setSubtotal(item.productPrice);
            return (
              <View key={index} style={styles.confirmationTop}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={{uri: item.productImage}}
                    style={{width: 50, height: 50, marginHorizontal: 10}}
                  />
                  <Text>{item.productName}</Text>
                </View>
                <Text style={{color: '#333', marginHorizontal: 10}}>
                  {item.quantity} x ${item.productPrice} = ${item.productPrice}
                </Text>
              </View>
            );
          })}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderTopWidth: 1,
            borderColor: '#00000036',
          }}>
          <Text style={{color: '#333', padding: 10, fontSize: 18}}>
            TotalPrice:
          </Text>
          <Text style={{color: '#333', padding: 10, fontSize: 16}}>
            ${cartData.reduce((acc, curr) => acc + curr.productPrice, 0)}
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={confirmOrderHandler}>
          <Text style={styles.buttonText}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const PaymentInfo = ({totalPrice, submitHandler}) => {
  return (
    <ScrollView style={styles.confirmation}>
      <Text
        style={{
          color: '#333',
          fontSize: 20,
          textAlign: 'center',
        }}>
        Enter your Card Info
      </Text>
      <CardField
        postalCodeEnabled={false}
        cardNumberEnabled={true}
        style={{
          width: '90%',
          height: 50,
          marginVertical: 30,
          marginLeft: 15,
          color: '#333',
        }}
      />
      {/* <TouchableOpacity style={styles.button} onPress={submitHandler}>
        <Text style={styles.buttonText}>Pay - ${totalPrice}</Text>
      </TouchableOpacity> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#00000036',
    borderWidth: 1,
    height: 50,
    color: '#333',
    borderRadius: 5,
    paddingLeft: 10,
  },
  inputMain: {
    width: width * 0.8,
    marginLeft: width * 0.1,
    marginVertical: 15,
    color: '#333',
  },
  button: {
    width: width * 0.8,
    marginLeft: width * 0.1,
    marginVertical: 20,
    backgroundColor: '#3BB77E',
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  confirmationTop: {
    width: width * 1,
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'space-between',
  },
  success: {
    width: width * 1,
    height: height * 1 - 50,
    justifyContent: 'center',
  },
});
