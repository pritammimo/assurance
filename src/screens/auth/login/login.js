/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Header from '../../../components/HeaderComponent';
import Inputcomponents from '../../../components/Inputcomponents';
import MyStatusBar from '../../../components/MyStatusBar';
import colors from '../../../themes/colors/colors';
import normalize from '../../../utils/helpers/normalize';
import {useNavigation} from '@react-navigation/native';
const Login = props => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <View>
        <MyStatusBar backgroundColor={colors.red} />
        <Header
          title="Login"
          logo={false}
          notification={false}
          isBackvisible={true}
          marginLeft={normalize(55)}
        />
        <View style={{paddingTop: normalize(20)}}>
          <Inputcomponents
            placeholder="Choose Password"
            multiline={false}
            height={normalize(40)}
            heightBox={false}
          />
        </View>
        <View style={{paddingTop: normalize(10)}}>
          <Inputcomponents
            placeholder="Confirm Password"
            multiline={false}
            height={normalize(40)}
            heightBox={false}
          />
        </View>
        <View
          style={{
            paddingRight: normalize(30),
            paddingLeft: normalize(23),
            paddingTop: normalize(15),
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.lightblack,
              height: normalize(32),
              borderRadius: normalize(3),
            }}
            onPress={() => navigation.navigate('AddSignature')}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: normalize(16),
                paddingTop: normalize(4),
                color: colors.white,
                fontWeight: '700',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
