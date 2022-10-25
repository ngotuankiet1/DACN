import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Form,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import {register} from '../../../Redux/Actions/UserAction';
import { useDispatch, useSelector } from 'react-redux';
var {width} = Dimensions.get('window');

export default function SignUp({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(
    'https://mern-nest-ecommerce.herokuapp.com/profile.png',
  );
  const {error, loading, isAuthenticated} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const uploadImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.8,
    }).then(image => {
      setImage(image.path);
    });
  };

  const registerUser = () => {
    dispatch(register(name, email, password, image));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({ type: "clearErrors" });
    }

    if (isAuthenticated) {
      alert('User create Done!');
    }
  }, [dispatch, error, alert, isAuthenticated]);

  return (
    <View style={styles.container}>
      <View style={styles.LoginHeader}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '500',
            fontFamily: 'sans-serif',
            color: '#555',
          }}>
          Welcome
        </Text>
        <Text>Sign In to continue</Text>
      </View>
      <View style={styles.LoginBox}>
        <View style={styles.relative}>
          <Icon name="user" size={30} style={styles.icon} />
          <TextInput
            placeholder="Write your name..."
            placeholderTextColor="#333"
            style={styles.inputBox}
            value={name}
            onChangeText={text => setName(text)}
            textContentType="name"
          />
        </View>
        <View style={styles.relative}>
          <Icon2 name="mail-outline" size={30} style={styles.icon} />
          <TextInput
            placeholder="Write your email..."
            placeholderTextColor="#333"
            style={styles.inputBox}
            value={email}
            onChangeText={text => setEmail(text)}
            textContentType="emailAddress"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.relative}>
          <Icon name="lock" size={30} style={styles.icon} />
          <TextInput
            placeholder="Write your password..."
            placeholderTextColor="#333"
            style={styles.inputBox}
            value={password}
            onChangeText={text => setPassword(text)}
            textContentType="emailAddress"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.relative}>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={{uri: image}}
              style={{
                width: 40,
                height: 40,
                borderRadius: 80,
                resizeMode: 'contain',
                borderWidth: 1,
                borderColor: '#999',
              }}
            />
            <TouchableOpacity onPress={uploadImage}>
              <View
                style={{
                  marginLeft: 10,
                  width: width * 1 - 100,
                  height: 50,
                  backgroundColor: '#f5f5f5',
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 18,
                  }}>
                  Chosse Photo
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={registerUser}>
            <View style={styles.Button}>
              <Text style={{color: '#fff', fontSize: 18}}>SignUp</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: width / 6 - 20,
          justifyContent: 'flex-end',
        }}>
        <Text
          style={{
            color: '#333',
            fontSize: 15,
          }}>
          Already have an account ?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              fontSize: 15,
              color: '#FB578E',
              paddingRight: 15,
            }}>
            {' '}
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    padding: 20,
    backgroundColor: '#e5e5e5',
    height: width * 2,
  },
  LoginHeader: {
    width: width * 1,
    paddingVertical: 20,
    paddingTop: 15,
    paddingLeft: 10,
  },
  inputBox: {
    width: width * 1 - 50,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#3BB77E',
    paddingLeft: 50,
    fontSize: 15,
    marginVertical: 10,
  },
  relative: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 10,
    color: '#FB578E',
  },
  LoginBox: {
    marginTop: width / 4,
  },
  Button: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#3BB77E',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
