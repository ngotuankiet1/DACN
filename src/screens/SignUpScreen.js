import React from 'react';
import { View, Text } from 'react-native';
import SignUp from '../components/Authentication/SignUp';

const SignUpScreen = ({navigation}) => {
// render
    return (
        <View>
            <SignUp navigation={navigation} />
        </View>
    )
}

export default SignUpScreen
